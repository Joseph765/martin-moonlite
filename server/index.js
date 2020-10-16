const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/../public')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
