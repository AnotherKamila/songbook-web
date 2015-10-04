Songbook
========

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
- (will be) running on [Heroku](https://heroku.com/)

Development Quick Start
-----------------------

### The backend: `server/`

TODO

### The frontend: `web/`

- requires [node.js](https://nodejs.org/) and npm
- install dependencies: `npm install`
- dev server: run `node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors`, open http://localhost:8080/webpack-dev-server/bundle and enjoy continuous rebuild-and-automatic-reload-with-sourcemaps-and-everything!
