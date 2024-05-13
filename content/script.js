//scroll to sections

var workNav = document.querySelector(".work")
  .addEventListener("click", function scrollTo(){
    var workSection = document.querySelector(".section--assets");
    workSection.scrollIntoView({ block: "start", behavior: "smooth" });

});




    //thumbnail four
var canvas = document
  .querySelector(".thumbnail--lh")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--lh");

    var bot = document.querySelector(".cover--lower--lh");

    var para = document.querySelector(".description--lh");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });


var canvas = document
  .querySelector(".thumbnail--Cyber")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--Cyber");

    var bot = document.querySelector(".cover--lower--Cyber");

    var para = document.querySelector(".description--Cyber");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });



var canvas = document
  .querySelector(".thumbnail--erosion")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--erosion");

    var bot = document.querySelector(".cover--lower--erosion");

    var para = document.querySelector(".description--erosion");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });


var canvas = document
  .querySelector(".thumbnail--rain")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--rain");

    var bot = document.querySelector(".cover--lower--rain");

    var para = document.querySelector(".description--rain");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });

var canvas = document
  .querySelector(".thumbnail--ecs")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--ecs");

    var bot = document.querySelector(".cover--lower--ecs");

    var para = document.querySelector(".description--ecs");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });
  
  var canvas = document
  .querySelector(".thumbnail--rob")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--rob");

    var bot = document.querySelector(".cover--lower--rob");

    var para = document.querySelector(".description--rob");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });




  var canvas = document
  .querySelector(".thumbnail--jobs")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--jobs");

    var bot = document.querySelector(".cover--lower--jobs");

    var para = document.querySelector(".description--jobs");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });