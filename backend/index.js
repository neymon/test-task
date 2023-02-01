const { createPath } = require('./helpers');
const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const router = express.Router();

app.use('/', router);

app.ws('/', (ws, res) => {
  ws.on('message', message => {
    ws.send(message);
  });
});

app.listen(3001);
