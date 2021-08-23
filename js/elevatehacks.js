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
{ name: "Opening Ceremony", description: "Opening Ceremony and Keynote", link: "https://www.youtube.com/watch?v=JQTtX4mIx9k&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=1" },
{ name: "Team Formation", description: "Team Formation via Zoom" },
{ name: "Hackathons 101 by Akshaya Dinesh", description: "Learn to make the best of your hackathon experience from our opening ceremony keynote presenter, Stanford student and entrepreneur Akshaya Dinsesh!", link: "https://www.youtube.com/watch?v=JQTtX4mIx9k&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=1" },
{ name: "Creative Coding with Python - ImagiLabs", description: "Creative Coding with Python - ImagiLabs" },
{ name: "Intro to GitHub", description: "Intro to GitHub with Gauri Nair. Learn how to operate Github and collaborate on your hackathon project!", link: "https://www.youtube.com/watch?v=3yMr_opRem4&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=5" },
{ name: "Intro to Web Development (Qoom)", description: "Intro to Web Development with Qoom with Alexandria Bandle. Learn how to build a website from scratch using Qoom's IDE", link: "https://www.youtube.com/watch?v=dc4TgfeGong&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=2"},
{ name: "AI Ethics with Ria Cherevu", description: "AI Ethics with Intel researcher Ria Cherevu", link: "https://www.youtube.com/watch?v=kNpWDAefUFQ&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=3"},
{ name: "Women in Tech Panel", description: "Women in Tech Panel: hear from and ask questions to women in the tech industry", link: "https://www.youtube.com/watch?v=bJDqJf64n6k&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=7" },
{ name: "College Tech Leaders Panel", description: "College Tech Leaders Panel: hear from and ask questions to women studying STEM in college!", link: "https://www.youtube.com/watch?v=yb_7or5j9To&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=6" },
{ name: "Intro to iOS Development", description: "Intro to iOS Development Mikaela Caron. Build your first iOS application using Swift and Xcode!" },
{ name: "Intro to Machine Learning", description: "Intro to Machine Learning", link: "https://www.youtube.com/watch?v=-AsT2Qk2ROY&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=8" },
{ name: "Creative Coding with Python (ImagiLabs)", description: "Creative Coding with Python by ImagiMentor Andrea Maggino.", link: "https://www.youtube.com/watch?v=Vod1YQGTr5k&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=4" },
{ name: "Pitching Basics (and Hackathon Judging Debrief)", description: "Pitching Basics (and Hackathon Judging Debrief) with Director of Outreach, Aanvi Koolwal", link: "https://www.youtube.com/watch?v=jMH7sTvFu_s&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=9" },
{ name: "Zoom Reopens", description: "Zoom Reopens" },
{ name: "Submissions Due", description: "Submissions Due" },
{ name: "Submission Validation", description: "Submission Validation" },
{ name: "Intro to LinkedIn &amp; Resume Building", description: "Intro to LinkedIn & Resume Building by influencer and computer science PhD student, Liz Victoria", link: "https://www.youtube.com/watch?v=igUV_POcdtI&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=10"},
{ name: "Social Hour &amp; Game Period", description: "Social Hour & Game Period" },
{ name: "Awards and Closing Ceremony", description: "Awards and Closing Ceremony", link: "https://www.youtube.com/watch?v=gufU_iGD3p4&list=PLDFkmHUo2QidJrgeyIIYszy6GCqfIXKMA&index=11" }
];

function clickedScheduleRow(row) {
  var eventTitle = row.getElementsByTagName("td")[0].innerHTML;
  document.getElementById("event-box-title").innerHTML = eventTitle;

  for (i = 0; i < events.length; i++) {
    if (events[i].name === eventTitle) {
      document.getElementById("event-description-text-testing").innerHTML = events[i].description;
      document.getElementById("event-description-link").setAttribute("href", events[i].link);
      if (events[i].link !== undefined) {
        document.getElementById("event-description-link").innerHTML = "View the recording here";
      } else {
        document.getElementById("event-description-link").innerHTML = "";
      }
    }
  }
}
