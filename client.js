const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => console.log("Successfully connected!"));
  conn.on('connect', () => conn.write("Name: JJ"));

  // conn.on('connect', () => setTimeout(() => conn.write("Move: up")), 0)
  // conn.on('connect', () => setInterval(() => setTimeout(() => conn.write("Move: up")), 50), 50);

  conn.on('data', data => console.log(data));

  return conn;
}

module.exports = { connect }