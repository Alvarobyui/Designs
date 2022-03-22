//chamber meeting disaplays only on mondays and tuesdays
document.getElementById("meetingBanner").style.display = "none";
const day = now.getDay();
if (day == 1) {
	document.getElementById("meetingBanner").style.display = "block";
};
if (day == 2) {
	document.getElementById("meetingBanner").style.display = "block";
	};