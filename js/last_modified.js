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
]

let date = new Date();
let dayName = dayNames[date.getDate()];
let monthName = months[date.getMonth()];
let year = d.getfullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("currentDate").textContent = fulldate;
