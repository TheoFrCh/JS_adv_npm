let weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C
//console.log(JSON.stringify(result, null, 2));

weather.find({search: 'Valence, France', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    let ville = result[0].location.name;
    let temperature = result[0].current.temperature;
    let ciel = result[0].current.skytext;

    console.log(ville);
    console.log(temperature);
    console.log(ciel);
});