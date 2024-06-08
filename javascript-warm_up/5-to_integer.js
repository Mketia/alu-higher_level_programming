#!/usr/bin/node
<<<<<<< HEAD

const input = process.argv[2];
const isNumber = !isNaN(parseInt(input, 10));

if (isNumber) {
  console.log(`My number: ${parseInt(input, 10)}`);
} else {
  console.log('Not a number');
=======
const input = process.argv[2];
const isNumber = !isNaN(parseInt(input));

if (isNumber) {
	console.log(`My number: ${parseInt(input)}`);
}
else{
	console.log('Not a number');
>>>>>>> 344b76431a06fdf2c1adb686aab71ca27008188e
}
