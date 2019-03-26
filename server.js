const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')
const moment = require('moment')

var earthquakes = require('./app.js')

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => res.sendFile(publicDirectoryPath))

app.get('/json', (req, res) => {
    const date = req.query.date;
    const new_date = moment(date);
    const new_date_plus_one = new_date.clone().add(1, 'days');
    const start = new_date.format('YYYY-MM-DD');
    const end = new_date_plus_one.format('YYYY-MM-DD');
    earthquakes(start,end, (error,data)=>{
        res.json(data);
    })
});


app.listen(port, () => console.log(`Server listening on port ${port}!`))
