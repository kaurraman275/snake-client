const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.41',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  conn.on("data",(data) => {

    console.log( "SUcces");

  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: RPK');
   
  });

 

  return conn;
}

console.log('Connecting ...');
connect();