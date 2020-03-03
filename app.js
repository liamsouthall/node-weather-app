const figlet = require("figlet");
const readline = require("readline");
const { getLocation } = require("./location");
const { getWeather } = require("./weather");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getInput = () => {
  rl.question("Where do you want the weather for: ", function(input) {
    main(input);
  });
};

const main = async input => {
  const locationObj = await getLocation(input);
  await getWeather(locationObj);
  getInput();
};

figlet("Weather App", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  getInput();
});
