let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');
let pg = require('pg');

const report = require('./controllers/fetchreports');
const submit = require('./controllers/submitreport');
const signin = require('./controllers/fetchUser');

const PORT = 3000;

let pool = new pg.Pool({
    user: 'postgres',
    database: 'studentdb',
    password: '2459',
    host: 'localhost',
    port: 5432,
    max: 10
})

let app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// manual cors
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/api/submitreport', (req, res) => {
    submit.handleSubmit(req, res, pool);
})

app.get('/api/reports', (req, res) => {
    report.fetchReports(req, res, pool);
})

app.get('/api/user', (req, res) => {
    signin.fetchUser(req, res, pool);
})

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});