require('dotenv').config();

const PRODUCTION = require('./environments/production.js');
const DEVELOPMENT = require('./environments/development.js');
const TESTING = require('./environments/testing.js');
const QA = require('./environments/qa.js');

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === 'development') currentEnv = DEVELOPMENT;
if (NODE_ENV === 'production') currentEnv = PRODUCTION;
if (NODE_ENV === 'testing') currentEnv = TESTING;
if (NODE_ENV === 'qa') currentEnv = QA;

//console.log(currentEnv)
module.exports = currentEnv;
