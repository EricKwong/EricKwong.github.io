$(function() {
  // var self = this;
  // var steps = 0;
  // var currentLon;
  // var currentLat;

  // navigator.geolocation.watchPosition(function(position) {
  //   var lat = position.coords.latitude;
  //   var lon = position.coords.longitude;

  //   // var latKm = lat * (10000/90);
  //   // var lonKm = lon * (10000/90);

  //   // var latFeet = Math.abs(Math.round(latKm * 3280.4));
  //   // var lonFeet = Math.abs(Math.round(lonKm * 3280.4));

  //   // if (currentLon != null && currentLat !=null) {
  //   //   var lonDiff = currentLon - lonFeet;
  //   //   var latDiff = currentLat - latFeet;
      
  //   //   if (Math.abs(lonDiff) > 0 && Math.abs(lonDiff) < 200) {
  //   //     steps += Math.abs(lonDiff);
  //   //   }

  //   //   // if (Math.abs(latDiff) > 0 && Math.abs(latDiff) < 200) {
  //   //   //   steps += Math.abs(latDiff);
  //   //   // }
  //   // }

  //   // currentLon = lonFeet;
  //   // currentLat = latFeet;

  //   $("#steps").text(lat + ", " + lon);
  // })
  var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
  };

  var error = function(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  // var locate = function() {

    navigator.geolocation.watchPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      $("#steps").text(lat + ', ' + lon);
    }, error, options);
  // };
  // setInterval(locate, 1000);
});]