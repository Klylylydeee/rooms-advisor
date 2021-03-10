const express = require('express');

const app = express();

app.use(express.static('./dist/roomsadvisor'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/roomsadvisor/'}),
);

app.listen(process.env.PORT || 8080);