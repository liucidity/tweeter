/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    $(function () {
      $('#tweets-container').append(createTweetElement(tweet));
    });
  }
};

const createTweetElement = function (tweet) {
  let tweets = `
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
      ${timeago.format(tweet.created_at)}
    </time>
    <div class="social-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`;
  return tweets;
};

const loadTweets = function () {
  $(function () {
    $.get('/tweets', (data) => {
      renderTweets(data);
    });
  });
};
loadTweets();
