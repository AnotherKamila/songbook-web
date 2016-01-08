#!/bin/bash
# launches webpack-dev-server with the correct options (to make it behave like server.js)

BASE='public/'
$(npm bin)/webpack-dev-server --inline --hot --content-base "$BASE" --history-api-fallback
