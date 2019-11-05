const dev  = require('./dev');
const pr   = require('./pr');
const prod = require('./prod');

module.exports = async (object, payload) => {
  if (object === 'prod') return prod(object, payload);
  if (object === 'dev') return dev(object, payload);
  if (/^\d+$/.test(object)) return pr(object, payload);

  return 'Something happened';
};
