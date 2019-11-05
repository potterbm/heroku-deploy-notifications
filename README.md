## Features

* specific deploy notifications to a configurable Slack channel
* better deploy messages


### Deploy Messages

For Prod:
```
Deploy finished for Browser production

Found tickets:
  <ticket list parsed from diff>

https://josh.ai/portal
```

For dev:
```
Deploy finished for dev.josh.ai

What's new: <link to diff between master and prod>

https://dev.josh.ai/portal
```

For Review App
```
[OPTIONAL @someone] Deploy finished for PR App #<prNumber>

Found tickets:
  <ticket list parsed from commits/pr description>

https://jstar-dev-pr-<prNumber>.herokuapp.com/
```
