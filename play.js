const { connect } = require('./client');
const { stdin } = require('process');

console.log('Connecting ...');
connect();

const handleUserInput = () => {
  stdin.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    }
  })
}

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();

  return stdin;
}

setupInput();

