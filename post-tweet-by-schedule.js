const Twitter = require('twitter');
const cron = require('node-cron');

// Twitter API credentials
const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

// Scheduled tweet
const scheduledTweet = 'This is a scheduled tweet.';

// Schedule the tweet using cron
cron.schedule('0 9 * * *', () => {
  // Post the tweet
  client.post('statuses/update', { status: scheduledTweet }, (error, tweet, response) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Tweet successfully posted:', tweet.text);
    }
  });
}, {
  timezone: 'YOUR_TIMEZONE' // Replace with your desired timezone
});
