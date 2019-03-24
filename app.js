const request = require('request');

const earthquakes = (start, end, callback) =>{

     const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`

    request({ url: url, json: true }, (error, response)=>{
        if (error){
            callback('Unable to connect to earthquakes services', undefined)
        } else if (response.body.features === undefined){
            callback('Unable to find earthquake data', undefined)
        } else {
            callback(undefined, response.body.features)
        }
    })
}


module.exports = earthquakes