 daily

Place to say stuff...

**28.6.17**
Start to learn php, silverstripe, CWP, how it all ties together

**4.7.17**
Silverstripe stuff
Linking in sass, js with webpack
Setting up an SS project from scratch
Need to learn how to set up a MySQL db from scratch for an SS project

**5.7.17**
MySQL DB
Creating a class/table in SS
Handling Images in SS
Webscraping with cheerio, looking at other people's code

**9.7.17**
Promise.all catches when any of the promises reject.
Need to find a better way to execute a whole array of promises, regardless of whether they resolve or reject.

**13.7.17**
Need to get better at git stuff, look at leraningGit website
We clone the server-base onto our dev-server, cd into the directory and run composer install
Then with the theme for that particular site, we clone it down locally, and map it to e.g. moeparents/themes/parent-theme.
The core gets mapped straight into moeparents/parent-core

**25.7.17**
AgeGuessAPI, the Heroku instance (dyno) probably isn't the best place to rattle of thousands of promises and https requests of wikipedia pages. Might be best to scrape locally and then upload some sort of postgreSQL dump to the db, rather than running the scraping scripts on the server.
Starting to look into Oauth, need better understanding of what is trying to be achieved. Use JS to direct user to the appropriate route, depending on whether they are 'logged in'. Then, all requests to the API are authenticated, and are only carried out when user has their oAuth 'token'?

**27.7.17**
Composer.json, looking into how the backend for forms works. RESTful API endpoints with Silverstripe
Auth is hard
owl.carousel will take a bit of fiddling to look like it did, but some good css practice

**31.7.17**
Lots of pulling apart .css files and recomposing into multiple .scss files. Working with jQuery, managed to remove parents'dependency on jquery for the responsiveness of the carousel. Wanting to use more jQuery for doing front-end stuff as haven't really done at all in the past.
Installed AWS ElasticBeanstalk CLI

**1.8.17**
Setting up intelliJ to eslint with the airbnb configuration
Pulling apart more jQuery
Needed to be clicking around the pages of the site more often to detect breakages, page-utils

**3.8.17**
Setting up forms, should make better use of generators for next forms project

**4.8.17**
Just because something is in the gitignore doesn't necessarily mean it will be ignored.
If it has been previously staged then it will still want to be included in git, need to do someting like:
`$ git rm -r -f --cached dist` if you are trying to ignore the dist folder, or maybe the .idea folder

**9.8.17**
Deployed a form to UAT, using Bamboo to make a production build that is commited to the master branch on gitlab, then used dash.cwp to deploy it to UAT, which is on the moeforms instance. Starting to talk about the best way to gather requirements for forms

**10.8.17**
Making sure to run tests before commiting and pushing
Maybe git pre-commit hook to fix this e.g. https://www.npmjs.com/package/pre-commit
Redux with vanilla js to do the adding calculator

**11.8.17**
Going ember app from scratch, couldn't make work with base-components

**14.8.17**
Made ember app work from scratch by stripping down previous project. Must have quite specific dependencies. Need better understanding of MVC to translate how I would do something with react/redux to using a full MVC framework like ember.
Implement the remove function in the adding calculator, using an onclick function binding and by assigning each one based on its index

**18.7.17**
Revising the idea of 'data down actions up' in  Ember
Making things in Ember, shoudl refactor more as I go, code starting to look at bit hairy

**22.8.17**
MOEforms demo could use a bit of refactoring, need to also factor in some models and then do backend where possibly just post a stringified JSON object to be stored as a single form.

**24.8.17**
Node script to send an email from an AWS service that sends email, had some cors issues, looking at google forms for a bit of what to do for moeforms.
