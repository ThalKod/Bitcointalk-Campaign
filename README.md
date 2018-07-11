# Bitcointalk-Campaign

This is the campaign engine part, responsible for fetching user and update database...

API part can be found [here](https://github.com/ThalKod/Bitcointalk-API).

## OVERVIEW

Basically the Engine connect to the database and retrieve the list of current user. First check whether or not a user is using the current signature campaign for his level, if not, delete him from the database. Then it fetch the today post count of the users and update the database. Repeat this each 24h.


### Intallation

#### Setup the API:

```js
$ npm install
$ nodemon
```

By default the api is listening on localhost port 5000 or any local env variable if setup.


#### Setup the Engine:

* First you need to configure the config files for the api and database at /config/api.js & /config/db.js
* Second you need to configure the signature, in /config/signature.js you need to input the corresponding
HTML RENDERED signatures for each different level of user, you can check the rendered signature with the api by a GET/ call to /users/:uid/signature

```js
$ npm install
$ nodemon 
```
