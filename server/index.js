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

app.use('/:id', (req, res, next) => {
    const post_id = req.params.id

    const details_array = job_data.filter(function (el) {
        return el.id == post_id
    })

    return res.json(details_array)

    // test function
    // return res.json({
    //     "msg": "Hello from the id path",
    //     "id": post_id,
    //     "details": details_array
    // })
});

app.use('/', (req, res, next) => {
    // EXAMPLE query = ?&search=term&full_time=true&page=page
    // http://localhost:5000/?&search=engineer&location=CA&full_time=true&page=1
    // http://localhost:5000/?&search=Dev-Ops&full_time=true&page=1
    // http://localhost:5000/?&search=CI/CD&full_time=true&page=1
    let qs = req.query;
    let job_type = ""
    let query_array = job_data

    console.log("qs: ", qs)

    // "no query string present" case
    if (JSON.stringify(qs) === "{}") {
        console.log("qs is empty")
        const empty = []
        return res.json( job_data )
    }

    // check for full-time (t/f) TODO: change this from bool --> string
    if (qs.full_time === "true") {
        job_type = "Full-Time"
        console.log("full time (y/n): ", job_type);
    } else {
        job_type = "Contract"
    }

    // description query
    let text = qs.search;
    if (qs.search) {
        query_array = query_array.filter( obj => 
            obj.description.toLowerCase().includes(text.toLowerCase())
        );
    }

    // job type query
    console.log(job_type)
    if (qs.full_time) {
        query_array = query_array.filter( obj => 
            obj.type == job_type
        );
    }

    // location query
    if (qs.location) {
        query_array = query_array.filter( obj => 
            obj.location.includes(qs.location)
        );
    }
    
    return res.json(query_array);
});

// app listener
app.listen(port, () => {
    console.log('"server" listening on port: ', port)
});