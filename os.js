// defining constant and setting it to require calling or exporting os in the 
const { log } = require('console');
const os = require('os');

// These are different methods 

// The total amount of system memory in bytes (total memory in bytes)
var totalMemory = os.totalmem();

// returns amount of free system memory in bytes as an integer (free memory in bytes)
var freeMemory = os.freemem();


// this is the basic logging
// console.log('total memory: ' + totalMemory);

// template string 
/* this makes the it easier and able to make it dynamic...  */

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);