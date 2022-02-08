const path = require('path');
const cmd = require('../build/main/cmd');

const cliPath = path.join(__dirname, '../cli.js');
const cliProcess = cmd.create(cliPath, '.');

describe('cli', () => {
  it.each(['createProcess', 'create', 'DOWN', 'UP', 'ENTER', 'SPACE'])(
    'exports %s member',
    (member) => {
      expect(Object.prototype.hasOwnProperty.call(cmd, member)).toBeDefined();
    }
  );
});
