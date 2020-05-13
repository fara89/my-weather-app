const request = require('request');
const myapikey = process.env.API_KEY;

exports.getWeather = (req, res, next) => {
  res.render('index', {weatherReport: null, error:null});
};

exports.postCity = (req, res, next) => {

  const city = req.body.city;
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID='+ myapikey

  request (url, function(error, response, body) {
    if (error) {
      res.render('index', {weatherReport: null, error: 'Error, Try again!'});
    } else {
    let weatherReport = JSON.parse(body);
    if (weatherReport.main == undefined) {
      res.render('index', {weatherReport: null, error: 'Error! This city is not found!'});
    } else {
    let report = 'The weather in:' + weatherReport.name + ' is ' + weatherReport.weather[0].main + '.';
    res.render('index', {weatherReport: report, error:null});
  }
}
  });

};
