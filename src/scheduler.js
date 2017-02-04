import Agenda from 'agenda';
import express from 'express';
import Agendash from 'agendash';
import Tweeter from './tweeter';
import Promise from 'bluebird';

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
const agenda = new Agenda({ db: { address: mongoConnectionString } }, (err) => { if (err) throw err;  console.log('connected'); });
const app = express();
app.use('/agendash', Agendash(agenda));
app.listen(3000);
  const tweeter = new Tweeter();

agenda.define('testing', () => {
  console.log('test');
});

agenda.define('tweetOnce', (job, done) => {
  tweeter.sendTweet()
    .then(
      () => { done(); }
    );
});

agenda.on('ready', () => {


  agenda.purge((err, numRemoved) => {
  });
  agenda.every('20 second', 'tweetOnce');
  agenda.start();
});
