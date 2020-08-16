const MESSAGES = (temperatureUnit, windSpeedUnit) => {
  const temperatureMessage = {
    F: "50 °F",
    C: "10 °C",
    K: "283.15 K",
  };

  const windSpeedMessage = {
    mph: "3 mph",
    kmh: "5 km/h",
    ms: "1.39 m/s",
  };

  return {
    WRONG_INPUT: "Type numbers only.",
    BELOW_TEMPERATURE: `Temperature must be at or below ${temperatureMessage[temperatureUnit]}`,
    ABOVE_WIND_SPEED: `Wind speed must be above ${windSpeedMessage[windSpeedUnit]}`,
  };
};

export default MESSAGES;
