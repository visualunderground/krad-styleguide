#  Kainos User Research & Design Styleguide
---
## Documentation

This repository generates the front-end assets for your service as well as providing a platform to document pattern usage, and rapid prototyping.

### tl;dnr 

  - download the repository from github
  - checkout the **master** branch + ```git pull```
  - ```npm install```
  - create a **feature** or **fix** branch
  - do your work + commit and create a merge request for peer review
  - once reviewed and merged, checkout the **master** branch
  - ```grunt build:no-lint```
  - ```grunt dist```
  - see git changes and commit modified files in /dist folder
  - ```git tag``` to see all tags, increment highest using [Semantic Versioning](http://semver.org/)
  - ```git tag -a v0.5.1 -m 'Version 0.5.1'```
  - ```git push —-tags```
  - update your project's dependency manager to point to the new tag

***

### 1. Setup

To setup your local machine for development you'll need to: 

- clone this repository
- checkout the latest version of the **master** branch
- install Ruby dependencies
- install Node dependencies (a postinstall script will automatically get bower dependencies and scaffold the app using Grunt)
- start the app

```
$ git clone git@github.com:visualunderground/krad-styleguide.git
$ git checkout master && git pull
$ bundle install
$ npm install
$ node app.js
```

### 2. Accessing the application locally

After starting the app you can access locally via the URL: 

[http://localhost:3008](http://localhost:3008)

### 3. Development process

Development should follow the following process:

- create a feature (or fix) branch in the following formats
  - feature/JIRA-ID-lowercased-jira-title
  - fix/JIRA-ID-lowercased-jira-title
  - feature/lowercased-description for a styleguide specific change
  - fix/lowercased-description for a styleguide specific change
- do your work + commit + push, watch out for these gotchas;
  - **never** work in the 'dist' or 'public' folders - they will get nuked when assets are created by Grunt
  - **never** save a new npm dependency using the ```--save-dev``` flag, **instead** use ```--save``` (this is due to Heroku's build process)
- run a 'Visual Regression Test' using [Wraith](https://github.com/BBC-News/wraith)
  - To test your **current** local branch against **Heroku** use the command: ```$ grunt test:integration```
- create a merge request and assign it for peer review

### 4. Peer review

The job of the peer review is to:

- ensure code quality
- test for visual regression bugs using [Wraith](https://github.com/BBC-News/wraith)
- merge the branch into the **master** branch

### 5. Building front-end assets for your service's application

To compile assets ready for consumption by your service you'll need to:

- checkout the latest version of the **master** branch
- build the latest version of the assets 
  - if the linter is really playing up you could use ```$ grunt build:no-lint``` instead of ```$ grunt build```
- recreate the dist directory (the directory consumed by your service) 
- commit and push all modified files in /dist folder to origin
- identify the most recent tag from the list of tags
- increment the most recent tag using [Semantic Versioning](http://semver.org/)
  - MAJOR version for **incompatible** changes,
  - MINOR version for backwards-compatible functionality, and
  - FIX version for backwards-compatible bug fixes.
- push the tag to origin

```
$ git checkout master && git pull
$ grunt build
$ grunt dist
$ git add dist/* && git commit -m 'Created asset distribution' 
$ git push
$ git tag
$ git tag -a v[MAJOR].[MINOR].[FIX] -m 'Version [MAJOR].[MINOR].[FIX]'
$ git push —-tags
```

### 6. Integration with your service's application

Once a tag has been created update your service's dependency manager (Composer, Bower etc.) to point to the new tag. 

### 7. Deployment to Heroku

Heroku is used as an externally accessible, cloud based, platform for user testing, (remote) PO sign off and visual regression testing.

To deploy to Heroku you'll need to:
 - sign up for a free [account](https://signup.heroku.com/www-header).
 - follow their [Getting started with NodeJS tutorial ](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) to ensure everything is configured correctly
 - request collaborator access by emailing t.carrington@kainos.com or j.sudworth@kainos.com

Once these steps have been completed you can configure your local styleguide repository to add another remote on Heroku.

```
$ heroku git:remote -a [APPLICATION-NAME]
```

Then, to deploy, type

```
$ git push heroku master:master
```
