/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    $(function () {
      console.log(tweet);
      $('#tweets-container').append(createTweetElement(tweet));
    });
  }
};

const createTweetElement = function (tweet) {
  let $tweet = `
  <article class="tweet">
  <header>
    <div class="profile">
      <img src="${tweet.user.avatars}" />
      <p>
        ${tweet.user.name}
      </p>
    </div>
    <a class="account-tag">${tweet.user.handle}</a>
  </header>
  <p>
    ${tweet.content.text}
  </p>
  <footer>
    <time>
      ${tweet.created_at}
    </time>
    <div class="social-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
  return $tweet;
};

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


renderTweets(data);