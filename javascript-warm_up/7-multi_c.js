#!/usr/bin/node

// Get the first argument and convert it to an integer
const args = process.argv;
const x = parseInt(args[2], 10);

// Check if x is a number
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
