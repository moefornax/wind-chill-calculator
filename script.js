import MESSAGES from "./js/messages.js";
import calcFeelTemperature from "./js/calcFeelTemperature.js";
import { temperatureCalculations, windSpeedCalculations, feelTemperatureToString } from "./js/calculations.js";
import { showError, clearErrors } from "./js/errors.js";

function getNums() {
  const inputTemperature = document.getElementById("temperature_input").value;
  const inputWindSpeed = document.getElementById("wind_speed_input").value;
  const windSpeedUnit = document.querySelector("input[name=wind_speed]:checked")?.value ?? "mph";
  const temperatureUnit = document.querySelector("input[name=temperature]:checked")?.value ?? "F";
  const messages = MESSAGES(temperatureUnit, windSpeedUnit);
  clearErrors();
  let hasError = false;

  if (isNaN(inputTemperature)) {
    hasError = true;
    showError("temperature_error", messages.WRONG_INPUT);
  }
  if (isNaN(inputWindSpeed)) {
    hasError = true;
    showError("wind_speed_error", messages.WRONG_INPUT);
  }
  if (hasError) return;

  const temperature = temperatureCalculations[temperatureUnit](inputTemperature);
  const windSpeed = windSpeedCalculations[windSpeedUnit](inputWindSpeed);

  if (temperature > 50) {
    hasError = true;
    showError("temperature_error", messages.BELOW_TEMPERATURE);
  }
  if (windSpeed < 3) {
    hasError = true;
    showError("wind_speed_error", messages.ABOVE_WIND_SPEED);
  }
  if (hasError) {
    document.getElementById("feel_input").value = "";
    document.getElementById("note").classList.add("has_error");
    return;
  }

  document.getElementById("note").classList.remove("has_error");
  const feelTemperature = calcFeelTemperature(temperature, windSpeed);
  const stringifiedFeelTemperature = feelTemperatureToString[temperatureUnit](feelTemperature);
  document.getElementById("feel_input").value = stringifiedFeelTemperature;
}

window.addEventListener("load", () => {
  const inputs = document.querySelectorAll("input");
  Array.from(inputs).forEach((input) => {
    input.addEventListener("input", getNums);
  });
});
