const https = require('https');

module.exports = (channel, message = '') => new Promise((resolve, reject) => {
  const options = {
    headers  : {
      'Authorization' : 'Bearer YOUR-TOKEN-HERE',
      'Content-Type'  : 'application/json',
    },
    hostname : 'slack.com',
    method   : 'POST',
    path     : `/api/chat.postMessage`,
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

  request.write(JSON.stringify({
    channel : channel.replace(/[^A-Za-z0-9]/g, ''),
    text : message,
  }));

  request.end();
});
