const convertToCelsius = function(tempFahrenheit) {
  let convertedTempC = (tempFahrenheit - 32)* (5/9);
  convertedTempC = (Math.round(convertedTempC * 10))/10;
  return convertedTempC;
};

const convertToFahrenheit = function(tempCelsius) {
  let convertedTempF = tempCelsius * (9/5) + 32;
  convertedTempF = (Math.round(convertedTempF * 10))/10;
  return convertedTempF;
};


// F = C * (9/5) + 32

// C = (F - 32)(5/9)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
