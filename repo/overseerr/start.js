#!/usr/bin/node

// ensure production env
process.env.NODE_ENV="production";
// and it needs to run from the right folder
process.chdir(__dirname);

require('./dist/index.js');
