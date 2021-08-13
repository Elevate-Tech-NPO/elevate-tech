//countdown
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

countdown = new Date("Aug 13, 2021 20:00:00").getTime();

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
  var day1 = 13;

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
  document.getElementById("schedule-date").innerHTML = "August " + date + "th";

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var events = [{ name: "Zoom Opening", description: "Zoom Opening" },
{ name: "Opening Ceremony", description: "Opening Ceremony and Keynote" },
{ name: "Team Formation", description: "Team Formation via Zoom" },
{ name: "Hackathons 101 by Akshaya Dinesh", description: "Learn to make the best of your hackathon experience from our opening ceremony keynote presenter, Stanford student and entrepreneur Akshaya Dinsesh!" },
{ name: "Creative Coding with Python - ImagiLabs", description: "Creative Coding with Python - ImagiLabs" },
{ name: "Intro to GitHub", description: "Intro to GitHub with Gauri Nair. Learn how to operate Github and collaborate on your hackathon project!" },
{ name: "Intro to Web Development (Qoom)", description: "Intro to Web Development with Qoom with Alexandria Bandle. Learn how to build a website from scratch using Qoom's IDE" },
{ name: "AI Ethics with Ria Cherevu", description: "AI Ethics with Intel researcher Ria Cherevu" },
{ name: "Women in Tech Panel", description: "Women in Tech Panel: hear from and ask questions to women in the tech industry" },
{ name: "College Tech Leaders Panel", description: "College Tech Leaders Panel: hear from and ask questions to women studying STEM in college!" },
{ name: "Intro to iOS Development", description: "Intro to iOS Development Mikaela Caron. Build your first iOS application using Swift and Xcode!" },
{ name: "Intro to Android Development", description: "Intro to Android Development" },
{ name: "Creative Coding with Python (ImagiLabs)", description: "Creative Coding with Python by ImagiMentor Andrea Maggino." },
{ name: "Pitching Basics (aka Hackathon Judging Debrief)", description: "Pitching Basics (aka Hackathon Judging Debrief) with Director of Outreach, Aanvi Koolwal" },
{ name: "Zoom Reopens", description: "Zoom Reopens" },
{ name: "Submissions Due", description: "Submissions Due" },
{ name: "Submission Validation", description: "Submission Validation" },
{ name: "Intro to LinkedIn & Resume Building", description: "Intro to LinkedIn & Resume Building by influencer and computer science PhD student, Liz Victoria" },
{ name: "Social Hour & Game Period", description: "Social Hour & Game Period" },
{ name: "Awards and Closing Ceremony", description: "Awards and Closing Ceremony" }
];

function clickedScheduleRow(row) {
  var eventTitle = row.getElementsByTagName("td")[0].innerHTML;

  document.getElementById("event-box-title").innerHTML = eventTitle;
  for (i = 0; i < events.length; i++) {
    if (events[i].name === eventTitle) {
      document.getElementById("event-description-text-testing").innerHTML = events[i].description;
      break;
    }
  }
}
