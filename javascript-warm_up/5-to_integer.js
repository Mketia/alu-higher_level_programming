#!/usr/bin/node

const input = process.argv[2];
const isNumber = !isNaN(parseInt(input, 10));

if (isNumber) {
  console.log(`My number: ${parseInt(input, 10)}`);
} else {
  console.log('Not a number');
}
