const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ extend: false }))
app.use(cors());

app.listen(3000, () => {
    console.log ('hello')
})