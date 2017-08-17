//before starting, changes were made to package.json to include sass.

const express = require('express');

const app = express();
app.use(express.static('public'));

console.log('===============')
console.log('process.env');
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.port}`);
});
