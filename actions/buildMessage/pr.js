const github      = require('../../github/api');
const ticketRegex = require('./ticketRegex');

module.exports = async (object, payload) => {
  const pullRequest = await github(`/repos/jstarllc/Browser/pulls/${object}`);

  const tickets = [
    ...new Set(
      `${pullRequest.body} ${pullRequest.head.ref}`.match(ticketRegex)
        .filter((ticket) => ticket)
        .map((ticket) => ticket.toUpperCase())
    )
  ];

  return `
Deploy finished for *PR ${object}* (https://github.com/jstarllc/Browser/pull/${object}).
*Tickets:*
${tickets.map((ticket) => `https://jstarllc.atlassian.net/browse/${ticket}`).join('\n')}\n
*Link:* https://jstar-dev-pr-${object}.herokuapp.com/portal
  `;
};
