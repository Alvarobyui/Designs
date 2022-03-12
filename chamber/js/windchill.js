/*****
Calculates the WInd Chill Temperature  
******/
const speed = 3;
const temp = 25;
document.getElementById("windSpeed").innerHTML = speed;
windChill(speed, temp);

function windChill(speed, temp) {
    const feelTemp = document.getElementById("windChill");
    let formula = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(formula);

    formula = Math.floor(formula);

    formula = (formula > temp) ? temp : formula;

    console.log(formula);

    feelTemp.innerHTML = formula;
}