const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { getCities } = require('../database/index');

const app = express();
const port = 3000;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('in get req')
  getCities((err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    console.log(data);
    res.status(200).send(data);
  })
})

app.listen(port, '192.168.86.28', () => {
  console.log(`Listening on port ${port}!`)
})