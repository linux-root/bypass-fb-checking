var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

var ipgeolocationApi = new IPGeolocationAPI("74998835f1ce4e74af4f877fabc62ad1", false);
const getCountryName = function (ip, handleRespone) {
    var geolocationParams = new GeolocationParams();
    geolocationParams.setIPAddress(ip);
    geolocationParams.setLang('en');
    ipgeolocationApi.getGeolocation(handleRespone, geolocationParams);
}

module.exports =  {getCountryName};