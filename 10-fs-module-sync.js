const {readFileSync, writeFileSync} = require('fs');

console.log('start');

//utf-8 is required for reading in the file
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: 'a'}); //{flag: 'a'} - is used for appeding.

console.log('done with the task');
console.log('start the next one');