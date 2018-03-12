Songbook
========

Check it out: https://spevnik.tumbolia.tk/#/intro

<!-- [![Heroku status](https://heroku-badge.herokuapp.com/?app=spevnik47)](https://spevnik47-web.herokuapp.com/) -->
<!-- [![Floobits Status](https://floobits.com/kamila/songbook.svg)](https://floobits.com/kamila/songbook/redirect) -->
[![Dependencies Status](https://david-dm.org/anotherkamila/songbook-web.svg)](https://david-dm.org/anotherkamila/songbook-web)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/AnotherKamila)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/anotherkamila/songbook-web/issues)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/kamila.svg)](https://liberapay.com/kamila/donate)

Awesome Songbook Web App. Wheeeee!
----------------------------------

A neat, mobile-friendly, and human-friendly songbook + sheet music organizer written as an offline web app.

Main Features
-------------

- almost paper-like feeling, in being minimal - no distractions
- makes use of the fact that it is not paper (e.g. built-in transposition or powerful search)
- easy to use and convenient for both me and a less computer-savvy person
- works offline
- works across all devices with modern browsers

### Actually implemented main features

- chords and sheet music display
- transposing (both chords and sheet music)
- awesome search (work in progress, but it is already quite good)
- nice URLs

### Notably not-implemented-but-planned features:

- adding your songs & creating your own songbooks :D
- offline usage
- recursive search -- searching inside sub-songbooks
- syncing view across devices (as when there is a lot of people, manually syncing several computers to show the same thing becomes annoying)

### When will you add support for *X*?

Not before my exam period is over (i.e. middle of February). I should have some time to work on this afterwards.

You can speed up the process by submitting pull requests ;-)

Using...
--------

- [React](https://facebook.github.io/react)
- [webpack](http://webpack.github.io/)

Development Quick Start
-----------------------

Note: This is the web front-end. The backend/API is [AnotherKamila/songbook-api](https://github.com/AnotherKamila/songbook-api).

- requires [node.js](https://nodejs.org/) and npm
- install dependencies: `npm install`
- dev server: run `npm start`, open [localhost:8000/](http://localhost:8000/) and enjoy continuous rebuild-and-automatic-reload-with-sourcemaps-and-everything!
- It will attempt to connect to the backend at the URL written in `config.js`.
