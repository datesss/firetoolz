import MarkovChain from 'markovchain';
import _ from 'lodash';
import fs from 'fs';
import fullwidth from 'fullwidth';
import fullLyrics from './lyrics';
import unicode from './unicode';

export default class TextFunctions {
  constructor(lyricsFile) {
    if (lyricsFile) {
      this.fullLyrics = fs.readFileSync(lyricsFile, 'utf8');
    } else {
      this.fullLyrics = fullLyrics;
    }
    this.lyrics = new MarkovChain(this.fullLyrics);
  }
  getRandomWord() {
    this.fullLyricsArray = this.fullLyrics.split(/\s+/);
    return this.fullLyricsArray[Math.floor(Math.random() * this.fullLyricsArray.length)];
  }
  replaceCharacter(character){
    if(!character){
      return unicode.weird[Math.floor(Math.random() * unicode.weird.length)]
    }
    let letterArray = unicode.uppercase[character.toLowerCase()];
    if(letterArray){
      return letterArray[Math.floor(Math.random() * letterArray.length)];
    }
    return character;
  }
  getWeirdCharacter(){
    return this.replaceCharacter();
  }
  fuckString(string){
    let newString = _.map(string, letter => this.replaceCharacter(letter));
    return newString.join('');
  }
  getChain(string) {
    let startWord = string || this.getRandomWord();
    let chain = this.lyrics.start(startWord).end(10).process();
    chain = chain.substring(0, 144);
    const lastSpace = chain.lastIndexOf(' ');
    chain = chain.substring(0, lastSpace);
    return this.addSpacing(this.fuckString(chain.toLowerCase()));
    // .lastIndexOf("planet");
  }
  addSpacing(string){
    if(string.length >= 142){
      return string;
    }
    let charactersToAdd = 71 - Math.floor(Math.random() * string.length/2) * 2;
    let newChars = _.times(charactersToAdd, () => {
      return  this.getWeirdCharacter();
    })
    let newString = ' ' + string + ' ';
    _.each(newChars, (char) => {
      if( Math.random() >= 0.5 ){
        newString = char + newString;
      } else {
        newString = newString + char;
      }
    })
    return newString;
  }
  getChainFromTweet(tweet) {
    const words = _.shuffle(tweet.toUpperCase().split(' '));
    const aChain = words.reduce((markovChain, word) => {
      if (markovChain.length) {
        return markovChain;
      }
      if (this.getChain(word).length) {
        return this.getChain(word);
      }
      return false;
    }, '');
    return aChain;
  }

}

// const stuff = new TextFunctions();
// console.log(stuff.getChain());
// console.log(stuff.getChainFromTweet('testing '));
//console.log(stuff.getChainFromTweet('obama is OVERFLOWING'));
