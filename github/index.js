/*
Deploy webhook example:

{
deployment_status:
   { url: 'https://api.github.com/repos/jstarllc/Browser/deployments/145129127/statuses/208793305',
     id: 208793305,
     node_id: 'MDE2OkRlcGxveW1lbnRTdGF0dXMyMDg3OTMzMDU=',
     state: 'success',
     creator:
      { login: 'bryan-jstar',
        id: 49448173,
        node_id: 'MDQ6VXNlcjQ5NDQ4MTcz',
        avatar_url: 'https://avatars1.githubusercontent.com/u/49448173?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/bryan-jstar',
        html_url: 'https://github.com/bryan-jstar',
        followers_url: 'https://api.github.com/users/bryan-jstar/followers',
        following_url: 'https://api.github.com/users/bryan-jstar/following{/other_user}',
        gists_url: 'https://api.github.com/users/bryan-jstar/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/bryan-jstar/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/bryan-jstar/subscriptions',
        organizations_url: 'https://api.github.com/users/bryan-jstar/orgs',
        repos_url: 'https://api.github.com/users/bryan-jstar/repos',
        events_url: 'https://api.github.com/users/bryan-jstar/events{/privacy}',
        received_events_url: 'https://api.github.com/users/bryan-jstar/received_events',
        type: 'User',
        site_admin: false },
     description: 'Heroku',
     environment: 'jstar-dev-pr-699',
     target_url: 'https://dashboard.heroku.com/apps/jstar-dev-pr-699/activity/builds/fb2fdd3a-f4e6-442b-a9f4-87723ee07c0c',
     created_at: '2019-05-10T19:32:08Z',
     updated_at: '2019-05-10T19:32:08Z',
     deployment_url: 'https://api.github.com/repos/jstarllc/Browser/deployments/145129127',
     repository_url: 'https://api.github.com/repos/jstarllc/Browser' },
  deployment:
   { url: 'https://api.github.com/repos/jstarllc/Browser/deployments/145129127',
     id: 145129127,
     node_id: 'MDEwOkRlcGxveW1lbnQxNDUxMjkxMjc=',
     sha: '867cd792f70821d16d56b7464e063a1dc33272f1',
     ref: '867cd792f70821d16d56b7464e063a1dc33272f1',
     task: 'deploy',
     payload: { web_url: 'https://jstar-dev-pr-699.herokuapp.com/' },
     original_environment: 'jstar-dev-pr-699',
     environment: 'jstar-dev-pr-699',
     description: 'Heroku',
     creator:
      { login: 'bryan-jstar',
        id: 49448173,
        node_id: 'MDQ6VXNlcjQ5NDQ4MTcz',
        avatar_url: 'https://avatars1.githubusercontent.com/u/49448173?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/bryan-jstar',
        html_url: 'https://github.com/bryan-jstar',
        followers_url: 'https://api.github.com/users/bryan-jstar/followers',
        following_url: 'https://api.github.com/users/bryan-jstar/following{/other_user}',
        gists_url: 'https://api.github.com/users/bryan-jstar/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/bryan-jstar/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/bryan-jstar/subscriptions',
        organizations_url: 'https://api.github.com/users/bryan-jstar/orgs',
        repos_url: 'https://api.github.com/users/bryan-jstar/repos',
        events_url: 'https://api.github.com/users/bryan-jstar/events{/privacy}',
        received_events_url: 'https://api.github.com/users/bryan-jstar/received_events',
        type: 'User',
        site_admin: false },
     created_at: '2019-05-10T19:24:36Z',
     updated_at: '2019-05-10T19:32:08Z',
     statuses_url: 'https://api.github.com/repos/jstarllc/Browser/deployments/145129127/statuses',
     repository_url: 'https://api.github.com/repos/jstarllc/Browser' },
  repository:
   { id: 51325991,
     node_id: 'MDEwOlJlcG9zaXRvcnk1MTMyNTk5MQ==',
     name: 'Browser',
     full_name: 'jstarllc/Browser',
     private: true,
     owner:
      { login: 'jstarllc',
        id: 11861586,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjExODYxNTg2',
        avatar_url: 'https://avatars1.githubusercontent.com/u/11861586?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jstarllc',
        html_url: 'https://github.com/jstarllc',
        followers_url: 'https://api.github.com/users/jstarllc/followers',
        following_url: 'https://api.github.com/users/jstarllc/following{/other_user}',
        gists_url: 'https://api.github.com/users/jstarllc/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jstarllc/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jstarllc/subscriptions',
        organizations_url: 'https://api.github.com/users/jstarllc/orgs',
        repos_url: 'https://api.github.com/users/jstarllc/repos',
        events_url: 'https://api.github.com/users/jstarllc/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jstarllc/received_events',
        type: 'Organization',
        site_admin: false },
     html_url: 'https://github.com/jstarllc/Browser',
     description: 'Browser Client',
     fork: false,
     url: 'https://api.github.com/repos/jstarllc/Browser',
     forks_url: 'https://api.github.com/repos/jstarllc/Browser/forks',
     keys_url: 'https://api.github.com/repos/jstarllc/Browser/keys{/key_id}',
     collaborators_url: 'https://api.github.com/repos/jstarllc/Browser/collaborators{/collaborator}',
     teams_url: 'https://api.github.com/repos/jstarllc/Browser/teams',
     hooks_url: 'https://api.github.com/repos/jstarllc/Browser/hooks',
     issue_events_url: 'https://api.github.com/repos/jstarllc/Browser/issues/events{/number}',
     events_url: 'https://api.github.com/repos/jstarllc/Browser/events',
     assignees_url: 'https://api.github.com/repos/jstarllc/Browser/assignees{/user}',
     branches_url: 'https://api.github.com/repos/jstarllc/Browser/branches{/branch}',
     tags_url: 'https://api.github.com/repos/jstarllc/Browser/tags',
     blobs_url: 'https://api.github.com/repos/jstarllc/Browser/git/blobs{/sha}',
     git_tags_url: 'https://api.github.com/repos/jstarllc/Browser/git/tags{/sha}',
     git_refs_url: 'https://api.github.com/repos/jstarllc/Browser/git/refs{/sha}',
     trees_url: 'https://api.github.com/repos/jstarllc/Browser/git/trees{/sha}',
     statuses_url: 'https://api.github.com/repos/jstarllc/Browser/statuses/{sha}',
     languages_url: 'https://api.github.com/repos/jstarllc/Browser/languages',
     stargazers_url: 'https://api.github.com/repos/jstarllc/Browser/stargazers',
     contributors_url: 'https://api.github.com/repos/jstarllc/Browser/contributors',
     subscribers_url: 'https://api.github.com/repos/jstarllc/Browser/subscribers',
     subscription_url: 'https://api.github.com/repos/jstarllc/Browser/subscription',
     commits_url: 'https://api.github.com/repos/jstarllc/Browser/commits{/sha}',
     git_commits_url: 'https://api.github.com/repos/jstarllc/Browser/git/commits{/sha}',
     comments_url: 'https://api.github.com/repos/jstarllc/Browser/comments{/number}',
     issue_comment_url: 'https://api.github.com/repos/jstarllc/Browser/issues/comments{/number}',
     contents_url: 'https://api.github.com/repos/jstarllc/Browser/contents/{+path}',
     compare_url: 'https://api.github.com/repos/jstarllc/Browser/compare/{base}...{head}',
     merges_url: 'https://api.github.com/repos/jstarllc/Browser/merges',
     archive_url: 'https://api.github.com/repos/jstarllc/Browser/{archive_format}{/ref}',
     downloads_url: 'https://api.github.com/repos/jstarllc/Browser/downloads',
     issues_url: 'https://api.github.com/repos/jstarllc/Browser/issues{/number}',
     pulls_url: 'https://api.github.com/repos/jstarllc/Browser/pulls{/number}',
     milestones_url: 'https://api.github.com/repos/jstarllc/Browser/milestones{/number}',
     notifications_url: 'https://api.github.com/repos/jstarllc/Browser/notifications{?since,all,participating}',
     labels_url: 'https://api.github.com/repos/jstarllc/Browser/labels{/name}',
     releases_url: 'https://api.github.com/repos/jstarllc/Browser/releases{/id}',
     deployments_url: 'https://api.github.com/repos/jstarllc/Browser/deployments',
     created_at: '2016-02-08T20:48:06Z',
     updated_at: '2019-05-09T21:54:20Z',
     pushed_at: '2019-05-10T19:24:24Z',
     git_url: 'git://github.com/jstarllc/Browser.git',
     ssh_url: 'git@github.com:jstarllc/Browser.git',
     clone_url: 'https://github.com/jstarllc/Browser.git',
     svn_url: 'https://github.com/jstarllc/Browser',
     homepage: null,
     size: 20190,
     stargazers_count: 0,
     watchers_count: 0,
     language: 'JavaScript',
     has_issues: true,
     has_projects: true,
     has_downloads: true,
     has_wiki: true,
     has_pages: false,
     forks_count: 1,
     mirror_url: null,
     archived: false,
     disabled: false,
     open_issues_count: 7,
     license: null,
     forks: 1,
     open_issues: 7,
     watchers: 0,
     default_branch: 'master' },
  organization:
   { login: 'jstarllc',
     id: 11861586,
     node_id: 'MDEyOk9yZ2FuaXphdGlvbjExODYxNTg2',
     url: 'https://api.github.com/orgs/jstarllc',
     repos_url: 'https://api.github.com/orgs/jstarllc/repos',
     events_url: 'https://api.github.com/orgs/jstarllc/events',
     hooks_url: 'https://api.github.com/orgs/jstarllc/hooks',
     issues_url: 'https://api.github.com/orgs/jstarllc/issues',
     members_url: 'https://api.github.com/orgs/jstarllc/members{/member}',
     public_members_url: 'https://api.github.com/orgs/jstarllc/public_members{/member}',
     avatar_url: 'https://avatars1.githubusercontent.com/u/11861586?v=4',
     description: '' },
  sender:
   { login: 'bryan-jstar',
     id: 49448173,
     node_id: 'MDQ6VXNlcjQ5NDQ4MTcz',
     avatar_url: 'https://avatars1.githubusercontent.com/u/49448173?v=4',
     gravatar_id: '',
     url: 'https://api.github.com/users/bryan-jstar',
     html_url: 'https://github.com/bryan-jstar',
     followers_url: 'https://api.github.com/users/bryan-jstar/followers',
     following_url: 'https://api.github.com/users/bryan-jstar/following{/other_user}',
     gists_url: 'https://api.github.com/users/bryan-jstar/gists{/gist_id}',
     starred_url: 'https://api.github.com/users/bryan-jstar/starred{/owner}{/repo}',
     subscriptions_url: 'https://api.github.com/users/bryan-jstar/subscriptions',
     organizations_url: 'https://api.github.com/users/bryan-jstar/orgs',
     repos_url: 'https://api.github.com/users/bryan-jstar/repos',
     events_url: 'https://api.github.com/users/bryan-jstar/events{/privacy}',
     received_events_url: 'https://api.github.com/users/bryan-jstar/received_events',
     type: 'User',
     site_admin: false } }
*/

const { notify } = require('../actions');
const api        = require('./api');

function getObjectFromEnvironmentString(environment) {
  if (environment === 'jstar-prod') return 'prod';
  if (environment === 'jstar-dev') return 'dev';
  return environment.match(/^jstar-dev-pr-(\d+)$/)[1];
}

module.exports = async (context, next) => {
  if (context.request.path !== '/github') return await next();

  const payload = context.request.body;

  console.log('================recieved github webhook=============')

  console.log('has deployment_status: ', !!payload.deployment_status);
  console.log('state: ', payload.deployment_status.state);
  console.log('environment: ', payload.deployment_status.environment);

  if (!payload.deployment_status) return await next();
  if (payload.deployment_status.state !== 'success') return await next();

  const object = getObjectFromEnvironmentString(payload.deployment_status.environment);

  await notify(object, payload);

  console.log('####################################################');

  context.response.status = 200;
  context.response.type = 'text/plain';
};
