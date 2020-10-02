//scroll to sections

var workNav = document.querySelector(".work")
  .addEventListener("click", function scrollTo(){
    var workSection = document.querySelector(".section--assets");
    workSection.scrollIntoView({ block: "start", behavior: "smooth" });

});



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

    //thumbnail three
var canvas = document
  .querySelector(".thumbnail--three")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--three");

    var bot = document.querySelector(".cover--lower--three");

    var para = document.querySelector(".description--three");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });

    //thumbnail four
var canvas = document
  .querySelector(".thumbnail--four")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--four");

    var bot = document.querySelector(".cover--lower--four");

    var para = document.querySelector(".description--four");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });

    //thumbnail five
var canvas = document
  .querySelector(".thumbnail--five")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--five");

    var bot = document.querySelector(".cover--lower--five");

    var para = document.querySelector(".description--five");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });

    //thumbnail six
//var canvas = document
  //.querySelector(".thumbnail--six")
  //.addEventListener("mouseenter", function active() {
    //var top = document.querySelector(".cover--upper--six");

    //var bot = document.querySelector(".cover--lower--six");

    //var para = document.querySelector(".description--six");
    
    //para.classList.toggle("para-tog")
    //top.classList.toggle("top-tog");
    //bot.classList.toggle("bot-tog");
  //});

    //thumbnail seven
var canvas = document
  .querySelector(".thumbnail--seven")
  .addEventListener("mouseenter", function active() {
    var top = document.querySelector(".cover--upper--seven");

    var bot = document.querySelector(".cover--lower--seven");

    var para = document.querySelector(".description--seven");
    
    para.classList.toggle("para-tog")
    top.classList.toggle("top-tog");
    bot.classList.toggle("bot-tog");
  });

