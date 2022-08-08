const express = require('express');
const app = express()
const port = 3000;
const livro = require('./src/models/livroModel')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/livro', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Estamos conectados!")
});

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

const routes = require('./src/routes/livroRoutes');
routes(app);


app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});