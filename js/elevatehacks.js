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
{ name: "Opening Ceremony", description: "Opening Ceremony and Keynote", link: "https://www.youtube.com/watch?v=JQTtX4mIx9k&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=1" }
];

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
