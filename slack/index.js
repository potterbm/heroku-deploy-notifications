const actions       = require('../actions');
const parseMessage  = require('./parseMessage');
const sendMessage   = require('./sendMessage');

const validTypes = [
  'app_mention',
  'message',
];

const operationAliases = {
  logActions  : 'logActions',
  notify      : 'subscribe',
  subscribe   : 'subscribe',
  unsubscribe : 'unsubscribe',
};

/*
OAuth Access Token: xoxp-4591011438-596069231249-634138549239-75ff905c3cbdada6e68e70fd0211c2ef
Bot User OAuth Access Token: xoxb-4591011438-620883202610-jKdBzlkw8EpbOdUJ9IeBI8KW
*/

module.exports = async (context, next) => {
  // console.log('raw request', context.request.body);

  if (context.request.path !== '/slack') return await next();

  if (context.request.body.type === 'url_verification') {
    context.response.status = 200;
    context.response.type = 'text/plain';
    context.response.body = context.request.body.challenge;
    return;
  }

  const payload = context.request.body;

  if (!payload.type === 'event_callback' || !validTypes.includes(payload.event.type) || payload.event.subtype === 'bot_message') return await next();

  context.response.status = 200;

  const { operation, subject, object } = await parseMessage(payload);
  console.log({ operation, subject, object });

  if (operationAliases[operation]) await actions[operationAliases[operation]](object, subject);

  await sendMessage(payload.event.channel, `Okay, I will ${operation} ${subject} for ${object}`);

  context.response.status = 200;
  context.response.type = 'text/plain';
};
