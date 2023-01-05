const express = require('express');
const port = 3000;

const app = express();

const mainRouter = require('./routers/main.js')

app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(port, ()=>{
  console.log('Server running in http://localhost:' + port);
  });