const buildMessage = require('./buildMessage');
const sendMessage  = require('../slack/sendMessage');

// This is preloaded with <@UHJ216T7B> which is Bryan
const handlers = {
  // 'prNumber' : { '<@userid>' : true },

  'dev': { '<@UHJ216T7B>': true },
  'prod': { '<@UHJ216T7B>': true },

  'all': {},
};

async function subscribe(object, userTag) {
  if (!handlers[object]) handlers[object] = {};
  handlers[object][userTag] = true;
}

async function unsubscribe(object, userTag) {
  if (!handlers[object] || !handlers[object][userTag]) return;
  delete handlers[object][userTag];
}

async function notify(object, payload) {
  if (!handlers[object]) return;

  const messageText = await buildMessage(object, payload);

  const userTagsToNotify = Object.keys(handlers[object]).concat(Object.keys(handlers.all))
    .filter((tag, index, allTags) => allTags.indexOf(tag) === index);
  console.log('user tags: ', userTagsToNotify);

  userTagsToNotify.forEach((userTag) => sendMessage(userTag, messageText));
}

async function logActions() {
  console.log(handlers);
}

module.exports = {
  logActions,
  notify,
  subscribe,
  unsubscribe,
};
