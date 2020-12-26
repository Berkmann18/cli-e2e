const { program } = require('commander');
const pkg = require('../package.json');

program
  .arguments('<name>')
  .version(pkg.version)
  .description(pkg.description)
  .action((name) => {
    console.log(`Hello ${name}`);
  })
  .parse(process.argv);
