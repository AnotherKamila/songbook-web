Songbook
========

[![Heroku status](https://heroku-badge.herokuapp.com/?app=spevnik47)](https://spevnik47-web.herokuapp.com/)
[![Dependencies Status](https://david-dm.org/anotherkamila/songbook-web.svg)](https://floobits.com/kamila/songbook/redirect)
[![Floobits Status](https://floobits.com/kamila/songbook.svg)](https://floobits.com/kamila/songbook/redirect)

Yet another iteration of my HTML5 songbook attempt. Wheeeee!
------------------------------------------------------------

This thing might one day become a neat, touch-friendly, and human-friendly songbook/sheet music organizer written as an HTML5 offline app.

The Idea
--------

- it should have an almost paper-like feeling, at least in being minimal - no distractions
- it should make use of the fact that it is not paper (e.g. powerful search)
- it should be easy to use and convenient for both me and a less computer-savvy person
- it should work offline
- it should work across all devices with modern browsers

Notable planned features
------------------------

- awesome search
- nice URLs
- “playlists”
- offline usage
- transposing chords
- support for displaying other things besides lyrics with chords (notes, tabs, etc.)
- support for more/arbitrary metadata (via plugins)
- syncing view across devices (as when there is a lot of people, manually syncing several computers to show the same thing becomes annoying)
- easily extensible

Using...
--------

- [React](https://facebook.github.io/react)
- [webpack](http://webpack.github.io/)
- running on [Heroku](https://heroku.com/)

Development Quick Start
-----------------------

Note: This is the web front-end. The backend/API is [AnotherKamila/songbook-api](https://github.com/AnotherKamila/songbook-api).

- requires [node.js](https://nodejs.org/) and npm
- install dependencies: `npm install`
- start prod server: `node server` (or `heroku local`)
- dev server: run `./devserver.sh`, open [localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) and enjoy continuous rebuild-and-automatic-reload-with-sourcemaps-and-everything!
- It will attempt to connect to the backend at the URL written in `public/API_URL.conf`. If using the prod server, you should instead set the `API_URL` environment variable.
