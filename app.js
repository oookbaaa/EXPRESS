const express = require('express');
const http = require('http')
const mongo = require('mongoose');
const db = require('./config/dbconnection.json');
const bodyParser = require('body-parser');

mongo.connect(db.url).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit();
});
const userRouter = require('./routes/users');



const app = express();


app.use(bodyParser.json());


app.use('/users', userRouter);
app.use(express.json());






const server = http.createServer(app,console.log('Server run'));
server.listen(3000);