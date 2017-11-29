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

**31.8.17**
Ember.js frontend application, parsing JSON and stringifying it, escaping the html in some stringified json for displaying in tte browser

**21.9.17**
Reverse proxying port 80 to port 8888 with Apache, so that you can have a node app being served internally from port 8888

**25.9.17**
Using MongoDB to store form data with mongoose as a querying builder. Handling routing and data coming into the application with Ember.
Serving up different routes from different places, e.g. everything from /api gets routed to the express server, everything else looks in the directories on the server and serves through apache.

**6.9.17**
Creating Docker Images using the command line, e.g `$  docker build . -t my-docker-image`
Setting up docker containers to expose a given port to the host
Nginx config to send / to localhost:8080, and /api to localhost:8888 or something
Why should we use Docker? Setting up a project so that you can clone it on to a server, and just run `$npm run deploy-docker` to make life easy for me or whoever it needs to be easy for.

**10.9.17**
Need to get better at focusing on daily tasks, too much time skipping between tasks. Learning the importance of setting up a project to have a really tight development environment, with all the right things in the right places.
So that all you ever need to do is look at the readme, clone down and follow the steps and be up and running in no time

Also am wanting to start doing some little snippets in this repo, to demonstrate some kind of javascript concept, and progress them through. Would also be cool if they were all TDD and whatnot.

Some ideas:
* Closures
* Async/Await
* Chaining promises with passing down data
* let, var, const differences
* Function keyword vs fat arrow functions
...Stay tuned!

**11.10.17**
Key 'gotcha' with docker is that a docker image will just go back down again if its not doing anything. E.g. if we docker-compose a file, and create an image,  but not let it know to run its startup script (the one that likely has npm install etc.) then it will go down again straight away.

p.s. an emoji :smile:

**13.10.17**
Couldn't get docker to start pm2 and stay up so ended up just using node, which will run in the foreground, but using -d when running docker-compose up, will run it in the background, and then the container can close but still be open if you know what I mean.

*Docker*:whale:

**16.19.17**
What did I learn today? That UFW is the Linux firewall program sort of thing. When installing NGINX, I was going something like this:
```bash
$ sudo apt-get update
$ sudo apt-get install nginx
$ sudo ufw allow 'Nginx HTTP'
$ sudo ufw enable
```
Which will not enable SSH connections on port 22, so when I closed my ssh connection, I was unable to re ssh into my server. So then if you can't ssh in, there isn't much you can do. I found an article on how you might do it by mounting another instance on that instance, but in my case it was much easier to just nuke the server and start again.

So also need to include this command:
```bash
$ sudo ufw enable ssh
```

**20.10.17**
Creating the component in base-components that will render out all the forms from mongoDB representations so has to be well tested

**13.11.17**
Haven't written in here in a while... :grimacing:
More Silverstripe stuff, learning more about the cms and framework in general, in particular using the RESTapi module to serve up and CRUD data objects.

**30.11.17**
Had a great time working on creating dynamic computed properties that depend on values that are specified in the model. Usually, with a computed property you need to know what value it will watch at the time the Ember component is instantiated. At this point, these values are unknown because the app needs to get the model from the API, which happens after the component is declared.

The way to get around this was quite interesting, which I found here: https://spin.atomicobject.com/2015/08/03/ember-computed-properties/
Basically, inside your computed property, you return another Ember object that has the computed property that you after. That way you can dynamically declare the computed property's values it depends on.
