
let connection;

const  connect  = require('./client');
console.log('Connecting ...');
var returnvalue = connect();
const handleUserInput = function(key){

    if(key === '\u0003'){

        return process.exit()
    }
    else if(key === 'w') {


        connection.write("Move: up");
        //console.log("Move up");
    }


    else if(key === 'a') {

        console.log("left");
    }
    else if (key === 's') {

        console.log("down");
    }

    else if (key === 'd') {

        console.log("right");
    }

  }
  //handleUserInput()


const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;


  }

  setupInput(returnvalue)