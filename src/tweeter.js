import Twit from 'twit';
import secrets from './secrets';
import TextFunctions from './textfunctions';
import Promise from 'bluebird';


// const stream = T.stream('statuses/filter', { track: '@realDonaldTrump' });
//
// stream.start();
// stream.on('tweet', (tweet) => {
//   console.log(tweet.text);
// });

export default class Tweeter {
  constructor() {
    Promise.promisifyAll(Twit);
    this.T = new Twit(secrets);
    this.textFunctions = new TextFunctions();
    Promise.promisifyAll(this.T);
  }
  sendTweet() {
    return new Promise( (resolve, reject) => {
      this.T.post('statuses/update', { status: this.textFunctions.getChain() }, (err, data, response) => {
        if(err) {
          reject(err);
        }
        resolve(data);
      });
    })
  }
}
