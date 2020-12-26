const path = require('path');
const cmd = require('../build/main/cmd');

const cliPath = path.join(__dirname, './cli.js');
const cliProcess = cmd.create(cliPath, '.');

describe('Dummy CLI test', () => {
  it('should show something', async () => {
    const response = await cliProcess.execute(['Berkmann18']);
    expect(response).toEqual('Hello Berkmann18\n');
  });
});