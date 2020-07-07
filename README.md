# cli-e2e

[![NPM](https://nodei.co/npm/cli-e2e.png)](https://nodei.co/npm/cli-e2e/)

![Node.js CI](https://github.com/Berkmann18/cli-e2e/workflows/Node.js%20CI/badge.svg)
[![Responsible Disclosure Policy](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](./SECURITY.md)
[![SR](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![BCH compliance](https://bettercodehub.com/edge/badge/Berkmann18/cli-e2e?branch=master)](https://bettercodehub.com/results/Berkmann18/cli-e2e)
[![codecov](https://badgen.net/codecov/c/github/berkmann18/cli-e2e)](https://codecov.io/gh/berkmann18/cli-e2e)
[![Known Vulnerabilities](https://snyk.io/test/github/berkmann18/cli-e2e/badge.svg)](https://snyk.io/test/github/berkmann18/cli-e2e)
<!-- Codacy Badge -->

# Install

```bash
npm i -D cli-e2e
```

# Example

```js
const cliPath = path.join(__dirname, 'cli.js');
const cliProcess = cmd.create(cliPath, '.');

test('should return "Hello"', async () => {
  const response = await cliProcess.execute(['Hello']);
  expect(response).toEqual('Hello');
});
```

For more documentation, please check [`./doc/index.html`](./doc/index.html).

# Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Berkmann18"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="https://github.com/Berkmann18/cli-e2e/commits?author=Berkmann18" title="Code">💻</a> <a href="#infra-Berkmann18" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Berkmann18/cli-e2e/commits?author=Berkmann18" title="Documentation">📖</a> <a href="#maintenance-Berkmann18" title="Maintenance">🚧</a> <a href="#ideas-Berkmann18" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://zorrodg.github.io/"><img src="https://avatars0.githubusercontent.com/u/7141089?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrés Zorro</b></sub></a><br /><a href="#ideas-zorrodg" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Berkmann18/cli-e2e/commits?author=zorrodg" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

**Special thanks to @zorrodg for making the original JS code**