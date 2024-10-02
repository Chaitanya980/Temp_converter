function celciusToFahrenheit(degree) {
	displayResult.innerHTML = `${(degree * 1.8 + 32).toFixed(2)} Â°F`;
}
function celciusTokelvin(degree) {
	displayResult.innerHTML = `${(degree + 273.15).toFixed(2)} Â°K`;
}
function FahrenheitToCelcius(degree) {
	displayResult.innerHTML = `${(((degree - 32) * 5) / 9).toFixed(2)} Â°C`;
}
function FahrenheitToKelvin(degree) {
	displayResult.innerHTML = `${((5 / 9) * (degree + 459.67)).toFixed(2)} Â°K`;
}
function kelvinToCelcius(degree) {
	displayResult.innerHTML = `${(degree - 273.15).toFixed(2)} Â°C`;
}
function KelvinToFahrenheit(degree) {
	displayResult.innerHTML = `${(1.8 * (degree - 273.15) + 32).toFixed(2)} Â°F`;
}
