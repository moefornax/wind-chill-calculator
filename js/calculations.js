export const temperatureCalculations = {
  F: (value) => value,
  C: (value) => (9 / 5) * value + 32,
  K: (value) => (9 / 5) * (value - 273.15) + 32,
};

export const windSpeedCalculations = {
  mph: (value) => value,
  kmh: (value) => 0.621371 * value,
  ms: (value) => 2.23694 * value,
};

export const feelTemperatureToString = {
  F: (value) => value.toFixed(1).toString() + " °F",
  C: (value) => ((5 / 9) * (value - 32)).toFixed(1).toString() + " °C",
  K: (value) => ((5 / 9) * (value - 32) + 273.16).toFixed(1).toString() + " K",
};
