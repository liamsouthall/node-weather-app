const axios = require("axios");
const apiKey = "19501f64c7ad80143200da655d817361";

const getWeather = async locationObj => {
  const { location, lat, long } = locationObj;
  const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;
  try {
    const response = await axios.get(URL);
    console.log(
      `The weather in ${location} is ${
        response.data.currently.summary
      } and the temperature is ${(
        (response.data.currently.temperature - 32) *
        (5 / 9)
      ).toFixed(2)}°C`
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getWeather
};
