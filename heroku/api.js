const https = require('https');

module.exports = (
  endpoint,
  data = null,
  { method = 'GET', headers = {} } = {},
) => new Promise((resolve, reject) => {
  const options = {
    headers  : Object.assign({
      'Accept'        : 'application/vnd.heroku+json; version=3',
      'Authorization' : 'Bearer YOUR-TOKEN-HERE',
      'Content-Type'  : 'application/json',
    }, headers),
    hostname : 'api.heroku.com',
    method,
    path     : `/apps/jstar-prod/${endpoint}`,
  };

  const request = https.request(
    options,
    (response) => {
      if (response.statusCode > 399) return reject(response);

      const responseChunks = [];
      response.on('data', chunk => responseChunks.push(chunk));
      response.on('end', () => {
        if (responseChunks.length < 1) return resolve('');
        return resolve(JSON.parse(responseChunks.join('')));
      });
    }
  );

  request.on('error', error => reject(error));

  if (data) request.write(JSON.stringify(data));

  request.end();
});
