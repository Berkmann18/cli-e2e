const path = require('path');
const cmd = require('../build/main/cmd');

const cliPath = path.join(__dirname, '../cli.js');
const cliProcess = cmd.create(cliPath, '.');

