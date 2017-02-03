import MarkovChain from 'markovchain';
import _ from 'lodash';
import fs from 'fs';
import fullwidth from 'fullwidth';
import fullLyrics from './lyrics';

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
  getChain(string) {
    let startWord = string || this.getRandomWord();
    let chain = this.lyrics.start(startWord).end(10).process();
    chain = chain.substring(0, 144);
    const lastSpace = chain.lastIndexOf(' ');
    chain = chain.substring(0, lastSpace);
    return fullwidth(chain.toLowerCase());
    // .lastIndexOf("planet");
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

// const stuff = new Stuff();
//
// console.log(stuff.getChainFromTweet('testing '));
//console.log(stuff.getChainFromTweet('obama is OVERFLOWING'));
