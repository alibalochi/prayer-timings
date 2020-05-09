const express = require('express');
const app = express();
const cors = require('cors');
const job = require('./test');


app.use(express.json());
app.use(cors());


var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var dd = String(today.getDate()).padStart(2, '0');
var yyyy = today.getFullYear();

var day = yyyy + '-' + mm + '-' + dd;

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'prayer-timings'
    }
});


app.get('/waterford', (req, res) => {

    knex('waterford').where({
        day: day,
    }).select('fajr', 'maghrib').then(result => res.json(result[0]));

})


app.post('/time', (req, res) => {

    knex(req.body.city).where({
        day: day,
    }).select('fajr', 'maghrib').then(result => res.json(result[0]));

})

app.listen(3003, () => {
    console.log("app is running");
})