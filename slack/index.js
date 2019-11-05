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

module.exports = async (context, next) => {
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
