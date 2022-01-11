let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = dayNames[d.getDate()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentDate").textContent = fullDate;
