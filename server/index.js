const express = require('express');
const cors = require('cors');
const job_data = require('./jobs_data');
// const jobs_data = require('./jobs-data') 
require('dotenv').config();

const app = express();  // new express app instance
const port = 5000;  // set port

// middlewares
app.use(express.json());
app.use(cors());

// sanity check -- UNCOMMENT WHEN ROUTES ARE NOT CONNECTED
// app.use('/', (req, res, next) => {
//     return res.json({
//         "msg": "Hello from Location Microservice",
//         "msg2": "Hello again"})
// });

app.use('/', (req, res, next) => {
    return res.json(job_data )
});

// app listener
app.listen(port, () => {
    console.log('"server" listening on port: ', port)
});