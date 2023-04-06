var tweet = prompt("Compose your tweet:");

var tweetCount = tweet.length;

alert("You have " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");

var tweetSliced = tweet.slice(0,140);

alert("Your final text: " + tweetSliced);