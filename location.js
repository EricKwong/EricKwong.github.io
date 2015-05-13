$(function() {
  var self = this;
  navigator.geolocation.watchPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var latKm = lat * (10000/90);
    var lonKm = lon * (10000/90);

    var latFeet = Math.round(latKm * 3280.4);
    var lonFeet = Math.round(lonKm * 3280.4);

    var steps = 0;
    // var lonDiff = Math.abs(self.props.currentLon) - Math.abs(lonFeet);
    // var latDiff = Math.abs(self.props.currentLat) - Math.abs(latFeet);
    // if (Math.abs(lonDiff) > 0 && Math.abs(lonDiff) < 200) {
    //   steps += Math.abs(lonDiff);
    // }

    // if (Math.abs(latDiff) > 0 && Math.abs(latDiff) < 200) {
    //   steps += Math.abs(latDiff);
    // }

    $("#steps").text(latFeet + ' ' + lonFeet);
  })
});