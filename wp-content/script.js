//thumbnails

//thumbnail one
var canvas = document
  .querySelector(".thumbnail--one")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--one");

    var bot = document.querySelector(".cover--lower--one");

    var para = document.querySelector(".description--one");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");

  });

  //thumbnail two
var canvas = document
  .querySelector(".thumbnail--two")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--two");

    var bot = document.querySelector(".cover--lower--two");

    var para = document.querySelector(".description--two");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });
