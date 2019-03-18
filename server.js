const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const publicDirectoryPath = path.join(__dirname,'./public')

var earthquakes = require('./app.js')

let poutsa;

earthquakes('2017-01-02', '2017-01-03', (error,data)=>{
    poutsa = data;
})

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => res.sendFile(publicDirectoryPath))

app.get('/json', (req, res) => res.json(poutsa));

app.listen(port, () => console.log(`Server listening on port ${port}!`))