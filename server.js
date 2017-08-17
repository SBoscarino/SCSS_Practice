//before starting, changes were made to package.json to include sass.

const express = require('express');

const app = express();
app.use(express.static('public'));

console.log('===============')
console.log('process.env');
app.listen(7000, () => {
  console.log('listening on port 7000');
});
