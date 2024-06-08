#!/usr/bin/node
const fs= require('fs');

function readFile (filePath){
	fs.readFile(filePath, 'utf-8', (err,data) => {
		if(err){
			console.error(`An error has occured: ${err}`);
		}else{
			console.log(data);
		}
	});
}

if (process.argv.length >2) {
	const filePath = process.argv[2];
	readFile(filePath);
} else{
	console.log('Provide the file path.');
}
