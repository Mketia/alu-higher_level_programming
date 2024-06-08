#!/usr/bin/node

const request = require('request');

if (process.argv.length > 2) {
  const apiUrl = process.argv[2];

  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`An error occurred: ${error}`);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
      return;
    }

    try {
      const tasks = JSON.parse(body);
      const completedTasksByUser = {};

      tasks.forEach(task => {
        if (task.completed) {
          completedTasksByUser[task.userId] = (completedTasksByUser[task.userId] || 0) + 1;
        }
      });

      console.log(completedTasksByUser);
    } catch (error) {
      console.error(`An error occurred while parsing the response: ${error}`);
    }
  });
} else {
  console.log('Provide the API URL.');
}
