Nodejs-Nginx-Template
=====================

A template project for running NodeJS with Nginx as the server on Heroku.

## Usage

    $ heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git

After the buildpack has been added edit the package.json to reflect your projects needs and write your code in app.js.
app.js needs to be the startup script for the nodeJS instance running via Nginx but extra workers etc can be written as normal.
The socket being listened to in app.js must correspond with the socket in the nginx.conf.erb. If one is renamed you must rename the other one to match.