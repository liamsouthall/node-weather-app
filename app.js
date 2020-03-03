const figlet = require("figlet");
const { getLocation } = require("./location");
const { getWeather } = require("./weather");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

const main = async input => {
  // rl.question("Do you want to add, remove, list or leave: ", function(command) {
  const locationObj = await getLocation(input);
  await getWeather(locationObj);
  //}
};

figlet("Weather App", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  main(process.argv[2]);
});
