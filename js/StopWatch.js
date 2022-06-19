// // let Startbtn = document.getElementById("Start");
// // let Stopbtn = document.getElementById("Stop");
// // let Resendbtn = document.getElementById("Resend");
// // console.log(Startbtn);
// // console.log(Stopbtn);
// // console.log(Resendbtn);

// // window.onload = function () 
// // {
// //     var hur = 00;
// //     var minit = 00;
// //     var seconds = 00; 
// //     var tens = 00; 

// //     document.getElementById("tens")
// // }

// // setTimeout(myfunctio , 2000);
// // function myfunctio() 
// // {
// //     alert("hii bhautik");
// // }

// let set = setInterval(fun , 10); 
// function fun() {
//   let ten = 0;
//   // let tens = Number(ten); 
 
//   // for (let i = 0; i <= 100; i++) 
//   // {
//   //   // setInterval(i , 10); 
//   //   document.getElementById("tens").innerHTML = `${setTimeout(i)}`;
//   // }

//   if (ten <= 100 &&  100 >= ten) {
//   document.getElementById("tens").innerHTML = `${setTimeout(ten)}`;
// }

  
// }

// // if (sub <= 10) {
// //   document.getElementById("tens").innerHTML = `${sub}`;
// // }






































// // Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);