const currentyear = document.querySelector("#currentyear") 
const lastModified = document.querySelector("#lastModified")

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}`;

if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("windSpeed").textContent);

function calculateWindChill(tempF, speedMph) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
}

const windChillElement = document.getElementById("windChill");

if (temp <= 50 && wind > 3) {
  const windChill = calculateWindChill(temp, wind);
  windChillElement.textContent = `${windChill.toFixed(1)} °F`;
} else {
    windChillElement.textContent = "N/A"

}


