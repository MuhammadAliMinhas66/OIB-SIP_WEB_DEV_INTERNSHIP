function main() {
  var inp = document.getElementById('inp').value;
  var opt = document.getElementById('opt').value;
  var output = document.getElementById('output');
  var img = document.getElementById('img');

  function convertToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
  }

  var convertedTemp;
  if (opt === 'celsius') {
    convertedTemp = convertToCelsius(inp);
  } else {
    convertedTemp = convertToFahrenheit(inp);
  }

  output.innerHTML = 'Result = ' + convertedTemp;

  if (opt == 'celsius') {
    if (convertedTemp <= 0) {
        img.src = './image/cool.png';
    } else if (convertedTemp > 0  && convertedTemp <= 10) {
        img.src = './image/low.png';
    } else if (convertedTemp > 10 && convertedTemp <= 30) {
        img.src = './image/normal.png';
    } else if (convertedTemp > 30 && convertedTemp <= 40) {
        img.src = './image/high.png';
    } else {
        img.src = './image/hot.png';
    }
  }
  else {
    if (convertedTemp <= 32) {
        img.src = './image/cool.png';
    } else if (convertedTemp > 32  && convertedTemp <= 50) {
        img.src = './image/low.png';
    } else if (convertedTemp > 50 && convertedTemp <= 86) {
        img.src = './image/normal.png';
    } else if (convertedTemp > 86 && convertedTemp <= 104) {
        img.src = './image/high.png';
    } else {
        img.src = './image/hot.png';
    }
  }

  return false;
}
