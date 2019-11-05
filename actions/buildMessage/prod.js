const heroku      = require('../../heroku/api');
const ticketRegex = require('./ticketRegex');

module.exports = async (object, payload) => {
  const recentReleases = await heroku('releases', null, {
    headers : { Range : 'version ..; order=desc, max=2;' },
  });

  const lastTwoSlugs = await Promise.all(recentReleases.map(({ slug }) => heroku(`slugs/${slug.id}`)));
  lastTwoSlugs.reverse();

  return `
Deploy finished for production

Diff: https://github.com/jstarllc/Browser/compare/${lastTwoSlugs.map(({ commit }) => commit).join('...')}
  `;
};
