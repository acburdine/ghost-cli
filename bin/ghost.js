#!/usr/bin/env node
'use strict';

// provide a title to the process
process.title = 'ghost';
console.log(process.argv);

const argv = process.argv.slice(2);

if (argv.length === 0) {
    console.error('No command specified. Run `ghost help` for usage');
    process.exit(1);
}

require('rxjs');
require("any-observable/register")('rxjs');

const yargs = require('yargs');
const bootstrap = require('../lib/bootstrap');
bootstrap.run(argv, yargs);