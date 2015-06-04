$(function() {
  // var self = this;


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

  var steps = 0;
  var currentLon;
  var currentLat;

  var success = function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var latKm = lat * (10000/90);
    var lonKm = lon * (10000/90);

    var latFeet = Math.abs(latKm * 3280.4);
    var lonFeet = Math.abs(lonKm * 3280.4);

    if (currentLat != null && currentLon != null) {
      var latStep = Math.abs(currentLat - latFeet);
      var lonStep = Math.abs(currentLon - lonFeet);
      var newStep = Math.round(latStep + lonStep);
      step += newStep;
    } else {
      currentLat = latFeet;
      currentLon = lonFeet;
    }
    console.log("updated")
    $("#steps").text("Steps - " + steps + " | " + lat + ", " + lon);  
  };

  var error = function (error) {
    if (error.code === PositionError.TIMEOUT) {
      navigator.geolocation.getCurrentPosition(success, error,
      { maximumAge: 3000, timeout: 20000, enableHighAccuracy: false } );
    }
  };

  setInterval(function() {
    navigator.geolocation.getCurrentPosition(success ,error, { maximumAge: 0, timeout: 5000, enableHighAccuracy: true } );
  }, 1000);

});

