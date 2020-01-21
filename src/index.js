require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

console.log(process.env.APP_NAME)

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (request, response) => {
    console.log(request)
    return response.json({ "message": "Hello Wolrd"});
});
//Métodos HTTP get, post, put, delete
app.use(express.json());
app.use(routes);

app.listen(3333);