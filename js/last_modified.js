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
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let fullDate = monthName + " " + d.getDate() + ", " + d.getFullYear() + " -- " + hour + ":" + min + ":" + sec;

document.getElementById("currentDate").textContent = fullDate;
