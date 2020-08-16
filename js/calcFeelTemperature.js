const calcFeelTemperature = (temperature, windSpeed) =>
  35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

export default calcFeelTemperature;
