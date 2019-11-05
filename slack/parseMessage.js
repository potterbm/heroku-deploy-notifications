const selfMentionRegex = /^<@UJ8RZ5YHY>\s*/i;

const validOperations = [
  'logActions',
  'notify',
  'subscribe',
  'unsubscribe',
].join('|');

const meOrSlackTag = 'me|<@[A-Za-z0-9]+>';
const objectKey = 'pr\\s+\\d+|brow-\\d+';

const messageRegex = new RegExp(`^(${validOperations})\\s+(${meOrSlackTag})\\s+.*(${objectKey})$`, 'i');

module.exports = async (payload) => {
  // console.log('parsing payload: ', payload);
  const cleanMessageText = payload.event.text.trim().replace(selfMentionRegex, '');

  const [matched, operation = '', rawSubject = '', rawObject = ''] = (messageRegex.exec(cleanMessageText) || []);

  // Convert the special value "me" into a user tag
  const subject = rawSubject === 'me' ? `<@${payload.event.user}>` : rawSubject;

  // Convert the object into a useful thing: <prNumber>|dev|prod
  // TODO: Support brow-1234 objects
  const object = rawObject.replace(/pr\s+/i, '');

  return {
    object,
    operation,
    subject,
  };
};
