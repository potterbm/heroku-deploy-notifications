const https = require('https');

module.exports = (endpoint, data = null, method = 'GET') => new Promise((resolve, reject) => {
  const options = {
    headers  : {
      'Authorization' : 'Basic YOUR-TOKEN-HERE',
      'Content-Type'  : 'application/json',
      'User-Agent'    : 'bryan-jstar',
    },
    hostname : 'api.github.com',
    method,
    path     : endpoint,
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
