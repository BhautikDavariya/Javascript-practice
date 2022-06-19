// function ColorCn_1() 
// {
//     let topBackcolor = document.getElementById("main_scs_start");
//     let bridBackcolor = document.getElementById("bird");
//     let textColor = document.getElementById("bird_info");
//     let bird_img = document.getElementById("img");



//     topBackcolor.style.backgroundColor = "#5d5b5d";
//     bridBackcolor.style.backgroundColor = "#edebed";
//     textColor.style.color = "#141619";
//     bird_img.style.borderColor = "#141619"; 

// }
// function ColorCn_2() 
// {
//     let topBackcolor = document.getElementById("main_scs_start");
//     let bridBackcolor = document.getElementById("bird");
//     let textColor = document.getElementById("bird_info");
//     let bird_img = document.getElementById("img");

//     topBackcolor.style.backgroundColor = "#5e708a";
//     bridBackcolor.style.backgroundColor = "#c3d8fb";
//     textColor.style.color = "#424d71";
//     bird_img.style.borderColor = "#424d71"; 

// }

// function ColorCn_3() 
// {
//     let topBackcolor = document.getElementById("main_scs_start");
//     let bridBackcolor = document.getElementById("bird");
//     let textColor = document.getElementById("bird_info");
//     let bird_img = document.getElementById("img");

//     topBackcolor.style.backgroundColor = "#7f475b";
//     bridBackcolor.style.backgroundColor = "#f8d0df";
//     textColor.style.color = "#833f6b";
//     bird_img.style.borderColor = "#833f6b"; 

// }

// function ColorCn_4() 
// {
//     let topBackcolor = document.getElementById("main_scs_start");
//     let bridBackcolor = document.getElementById("bird");
//     let textColor = document.getElementById("bird_info");
//     let bird_img = document.getElementById("img");

//     topBackcolor.style.backgroundColor = "#191c23";
//     bridBackcolor.style.backgroundColor = "#808898";
//     textColor.style.color = "white";
//     bird_img.style.borderColor = "white"; 

// }


let topBackcolor = document.getElementById("main_scs_start");
let bridBackcolor = document.getElementById("bird");
let textColor = document.getElementById("bird_info");
let bird_img = document.getElementById("img");


function ColorCn(topcolor, bridcolor, textColors, bird_imgB) 
{
    topBackcolor.style.backgroundColor = topcolor;
    bridBackcolor.style.backgroundColor = bridcolor;
    textColor.style.color = textColors;
    bird_img.style.borderColor = bird_imgB; 
}