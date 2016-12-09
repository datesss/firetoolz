// import TwitterBot from 'node-twitterbot';
// const Bot = new TwitterBot.TwitterBot(secrets);
import Twit from 'twit';
import secrets from './secrets';

const T = new Twit(secrets);

const stream = T.stream('statuses/filter', { track: '@realDonaldTrump' });

stream.start();
stream.on('tweet', (tweet) => {
  console.log(tweet.text);
});
