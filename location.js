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

    if (currentLat != null && currentLon != null) {
      var newStep = calculateDistance(currentLat, currentLon, lat, lon);
      steps += Math.round((newStep * 3280.84) / 3) ; 
      currentLat = lat;
      currentLon = lon;     
    } else {
      currentLat = lat;
      currentLon = lon;
    }

    $("#steps").text("Steps: " + steps + " | Lat: " + lat + ", Lon: " + lon);  
  };

  var error = function (error) {
    if (error.code === PositionError.TIMEOUT) {
      navigator.geolocation.getCurrentPosition(success, error,
      { maximumAge: 3000, timeout: 20000, enableHighAccuracy: false } );
    }
  };

  // setInterval(function() {
    navigator.geolocation.watchPosition(success ,error, { maximumAge: 0, timeout: 5000, enableHighAccuracy: true } );
  // }, 1000);

});

Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}
