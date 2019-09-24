//Plain JavaScript! (no jQuery)//



var buttonOne = document.querySelector(".button-1");

var buttonTwo =
    document.querySelector(".button-2");

//LED BLOCK//

  var ledOne = document.querySelector(".led-1");

 var ledTwo = document.querySelector(".led-2");

 var ledThree = document.querySelector(".led-3");

 var ledFour = document.querySelector(".led-4");

 var ledFive = document.querySelector(".led-5");

 var ledSix = document.querySelector(".led-6");

 var ledSeven = document.querySelector(".led-7");

 var ledEight = document.querySelector(".led-8");

 var ledNine = document.querySelector(".led-9");

 var ledTen = document.querySelector(".led-10");

 var ledEleven = document.querySelector(".led-11");

 var ledTwelve = document.querySelector(".led-12");

 var ledThirteen = document.querySelector(".led-13");

 var ledFourteen = document.querySelector(".led-14");

 var ledFifteen = document.querySelector(".led-15");

 var ledSixteen = document.querySelector(".led-16");

 var ledSeventeen =
     document.querySelector(".led-17")

 var ledEighteen = document.querySelector(".led-18");

 var ledNineteen = document.querySelector(".led-19");

 var ledTwenty = document.querySelector(".led-20");

 var ledTwentyOne = document.querySelector(".led-21");

 var ledTwentyTwo = document.querySelector(".led-22");

 var ledTwentyThree = document.querySelector(".led-23");

 var ledTwentyFour = document.querySelector(".led-24");

 var ledTwentyFive = document.querySelector(".led-25");

        

//Button Inputs

buttonOne.addEventListener("click", function btnOne(){ 
  
  
  if (ledEleven.classList.contains("on")){
    console.log("up");
    ledEleven.classList.remove("on");
    ledSix.classList.add("on");
    return;
  }else{
   
  };
    
    if (ledSix.classList.contains("on")){
    console.log("a");
    ledSix.classList.remove("on");
    ledOne.classList.add("on");
    return;
  }else{
    
  };
  
      if (ledOne.classList.contains("on")){
    console.log("a");
    ledOne.classList.remove("on");
    ledTwentyOne.classList.add("on");
    return;
  }else{
    
  };
  
      if (ledTwentyOne.classList.contains("on")){
    console.log("a");
    ledTwentyOne.classList.remove("on");
    ledSixteen.classList.add("on");
    return;
  }else{
    
  };
  
      if (ledSixteen.classList.contains("on")){
    console.log("a");
    ledSixteen.classList.remove("on");
    ledEleven.classList.add("on");
    return;
  }else{
    
  };
  
 
});



buttonTwo.addEventListener("click", function btnTwo(){ 
  
  
  if (ledEleven.classList.contains("on")){
    console.log("down");
    ledEleven.classList.remove("on");
    ledSixteen.classList.add("on");
    return;
  }else{
   
  };
     if (ledSixteen.classList.contains("on")){
    console.log("down");
    ledSixteen.classList.remove("on");
    ledTwentyOne.classList.add("on");
    return;
  }else{
   
  };
    if (ledTwentyOne.classList.contains("on")){
    console.log("down");
    ledTwentyOne.classList.remove("on");
    ledOne.classList.add("on");
    return;
  }else{
   
  };
   if (ledOne.classList.contains("on")){
    console.log("down");
    ledOne.classList.remove("on");
    ledSix.classList.add("on");
    return;
  }else{
   
  };
    if (ledSix.classList.contains("on")){
    console.log("down");
    ledSix.classList.remove("on");
    ledEleven.classList.add("on");
    return;
  }else{
   
  };
  
 
});

// WALL RANDOMIZATION!

//var min = 1;
//var max = 5;

//function drawWall(min, max) {
// var random = (Math.random() * (max - min) + min);
//  console.log(random)
//}

function wallPhaseOne(){

  //remove when randomization finished
  
  ledTen.classList.add("on");
  ledFifteen.classList.add("on");
  ledTwenty.classList.add("on");
  ledTwentyFive.classList.add("on");
  
  
  //call next wall
  window.setTimeout(wallPhaseTwo, 1000);
   
}
function wallPhaseTwo(){
    if (ledFive.classList.contains("on")){
    ledFive.classList.remove("on");
    ledFour.classList.add("on");
  }else{
    
  };
  
  if (ledTen.classList.contains("on")){
    ledTen.classList.remove("on");
    ledNine.classList.add("on");
  }else{
    
  };
    if (ledFifteen.classList.contains("on")){
    ledFifteen.classList.remove("on");
    ledFourteen.classList.add("on");
  }else{
    
  };
    if (ledTwenty.classList.contains("on")){
    ledTwenty.classList.remove("on");
    ledNineteen.classList.add("on");
  }else{
    
  };
    if (ledTwentyFive.classList.contains("on")){
    ledTwentyFive.classList.remove("on");
    ledTwentyFour.classList.add("on");
  }else{
    
  };
  
  //call next wall
  window.setTimeout(wallPhaseThree, 1000);
  
}

function wallPhaseThree() {
      if (ledFour.classList.contains("on")){
    ledFour.classList.remove("on");
    ledThree.classList.add("on");
  }else{
    
  };
     if (ledNine.classList.contains("on")){
    ledNine.classList.remove("on");
    ledEight.classList.add("on");
  }else{
    
  };
       if (ledFourteen.classList.contains("on")){
    ledFourteen.classList.remove("on");
    ledThirteen.classList.add("on");
  }else{
    
  };
       if (ledNineteen.classList.contains("on")){
    ledNineteen.classList.remove("on");
    ledEighteen.classList.add("on");
  }else{
    
  };
       if (ledTwentyFour.classList.contains("on")){
    ledTwentyFour.classList.remove("on");
    ledTwentyThree.classList.add("on");
  }else{
    
  };
  
    //call next wall
  window.setTimeout(wallPhaseFour, 1000);
  
  
}

function wallPhaseFour() {
      if 
        (ledThree.classList.contains("on")){
    ledThree.classList.remove("on");
    ledTwo.classList.add("on");
  }else{
    
  };
         if (ledEight.classList.contains("on")){
    ledEight.classList.remove("on");
    ledSeven.classList.add("on");
  }else{
    
  };
         if (ledThirteen.classList.contains("on")){
    ledThirteen.classList.remove("on");
    ledTwelve.classList.add("on");
  }else{
    
  };
         if (ledEighteen.classList.contains("on")){
    ledEighteen.classList.remove("on");
    ledSeventeen.classList.add("on");
  }else{
    
  };
         if (ledTwentyThree.classList.contains("on")){
    ledTwentyThree.classList.remove("on");
    ledTwentyTwo.classList.add("on");
  }else{
    
  };
  
     //call next wall
  window.setTimeout(wallPhaseFive, 1000);
  
  
}

function wallPhaseFive() {
  if (ledTwo.classList.contains("on") && ledOne.classList.contains("on")){
  alert("game over");
  }else{
    ledTwo.classList.remove("on");
    ledOne.classList.add("on");
    
  };        
  
  if (ledSeven.classList.contains("on") && ledSix.classList.contains("on")){
  alert("game over");
    
 
    
  }else{
    ledSeven.classList.remove("on");
    ledSix.classList.add("on");
    
  };
             if (ledTwelve.classList.contains("on") && ledEleven.classList.contains("on")){
  alert("game over");
  }else{
    ledTwelve.classList.remove("on");
    ledEleven.classList.add("on");
    
  };
             if (ledSeventeen.classList.contains("on") && ledSixteen.classList.contains("on")){
  alert("game over");
  }else{
    ledSeventeen.classList.remove("on");
    ledSixteen.classList.add("on");
    
  };
             if (ledTwentyTwo.classList.contains("on") && ledTwentyOne.classList.contains("on")){
  alert("game over");
  }else{
    ledTwentyTwo.classList.remove("on");
    ledTwentyOne.classList.add("on");
    
  };
  
      //call next wall
  window.setTimeout(wallPhaseSix, 1000);
    
  
};

function wallPhaseSix() {
  
  ledSix.classList.remove("on");
  ledEleven.classList.remove("on");
  ledSixteen.classList.remove("on");
  ledTwentyOne.classList.remove("on");
  
  ledFive.classList.add("on");
  ledTen.classList.add("on");
  ledFifteen.classList.add("on");
  ledTwentyFive.classList.add("on");
  
     //call next wall
  window.setTimeout(wallPhaseTwo, 1000);
  
}
