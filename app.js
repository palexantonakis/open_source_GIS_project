const request = require('request');

// 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'

const earthquakes = (start, end, callback) =>{

     const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`
    //const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'

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