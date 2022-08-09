//countdown
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

countdown = new Date("Aug 20, 2022 00:00:00").getTime();

x = setInterval(function () {
    var now = new Date().getTime();
    var time = countdown - now;

    document.getElementById("countdown-days").innerText = Math.floor(time / (day));
    document.getElementById("countdown-hours").innerText = Math.floor((time % (day)) / (hour));
    document.getElementById("countdown-minutes").innerText = Math.floor((time % (hour)) / (minute));
    document.getElementById("countdown-seconds").innerText = Math.floor((time % (minute)) / second);
}, 1000);

//about us
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function (e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function (e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);

// schedule 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("schedule-slide");
    var dots = document.getElementsByClassName("schedule-dot");
    var day1 = 20;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    var date = day1 + slideIndex - 1;
    document.getElementById("schedule-date").innerHTML = "August " + date;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var events = [{ name: "Zoom Opening", description: "Zoom Opening" },
{ name: "Opening Ceremony", description: "Opening Ceremony and Keynote held by Uditi Sharma", link: "" },
{ name: "Team Matching", description: "TBD", link: "" },
{ name: "Intro to Web Development", description: "TBD", link: "" },
{ name: "Intro to App Development", description: "TBD", link: "" },
{ name: "Intro to Design", description: "TBD", link: "" },
{ name: "College CS Panel", description: "Speakers: Audrey Pe, Abigayle Peterson, Astha Singhal", link: "" },
{ name: "Pitching Basics & Submission Requests", description: "Held by Aanvi Koolwal", link: "" },
{ name: "Women in Tech Panel", description: "TBD", link: "" },
{ name: "Intro to JavaScript", description: "TBD", link: "" },
{ name: "Research in High School & College", description: "TBD", link: "" },
{ name: "AI for Social Good", description: "TBD", link: "" },
{ name: "How to Build an NPO in High School", description: "TBD", link: "" },
{ name: "Submissions", description: "TBD", link: "" },
{ name: "Closing Ceremony", description: "TBD", link: "" }

]

function clickedScheduleRow(row) {
    var eventTitle = row.getElementsByTagName("td")[0].innerHTML;
    document.getElementById("event-box-title").innerHTML = eventTitle;

    for (i = 0; i < events.length; i++) {
        if (events[i].name === eventTitle) {
            document.getElementById("event-description-text-testing").innerHTML = events[i].description;
            document.getElementById("event-description-link").setAttribute("href", events[i].link);
        }
    }
}
