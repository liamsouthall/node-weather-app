const axios = require("axios");
const mapBoxKey =
  "pk.eyJ1IjoibGlhbXNvdXRoYWxsIiwiYSI6ImNrN2J1bjk2ZjBncXIza21ycWx0bmZvMXcifQ.6yqg6iV6kKKj3PMwzG8ksw";

const getLocation = async location => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxKey}`;
  try {
    const response = await axios.get(URL);
    return {
      location: response.data.features[0].place_name,
      lat: response.data.features[0].center[1],
      long: response.data.features[0].center[0]
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getLocation
};
