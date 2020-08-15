function getNums() {
  var iTemp = document.getElementById("inputTemp").value;
  var iVelo = document.getElementById("inputVelo").value;
  var temp, velo;

  if (isNaN(iTemp)) {
    document.getElementById("errorFirst").innerHTML = "Type numbers only.";
  } else {
    document.getElementById("errorFirst").innerHTML = "";
  }
  if (isNaN(iVelo)) {
    document.getElementById("errorSecond").innerHTML = "Type numbers only.";
  } else {
    document.getElementById("errorSecond").innerHTML = "";
  }

  if (!isNaN(iTemp) && !isNaN(iVelo)) {
    if (radio_tempF.checked) {
      temp = iTemp;
    } else if (radio_tempC.checked) {
      temp = (9 / 5) * iTemp + 32;
    } else if (radio_tempK.checked) {
      temp = (9 / 5) * (iTemp - 273.15) + 32;
    }

    if (radio_velomph.checked) {
      velo = iVelo;
    } else if (radio_velokph.checked) {
      velo = 0.621371 * iVelo;
    } else if (radio_velomps.checked) {
      velo = 2.23694 * iVelo;
    }

    console.log("Temp: " + temp + " Fahrenheit");
    console.log("Velocity: " + velo + " mph");

    if (temp > 50 || velo < 3) {
      document.getElementById("note").style.color = "red";
      document.getElementById("feel").value = "";
    } else {
      document.getElementById("note").style.color = "gray";
      var feel_temp =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(velo, 0.16) +
        0.4275 * temp * Math.pow(velo, 0.16);

      if (radio_tempF.checked) {
        document.getElementById("feel").value =
          feel_temp.toFixed(1).toString() + " °F";
      } else if (radio_tempC.checked) {
        document.getElementById("feel").value =
          ((5 / 9) * (feel_temp - 32)).toFixed(1).toString() + " °C";
      } else if (radio_tempK.checked) {
        document.getElementById("feel").value =
          ((5 / 9) * (feel_temp - 32) + 273.16).toFixed(1).toString() + " K";
      }
    }
  }
}
