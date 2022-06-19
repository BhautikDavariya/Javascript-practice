// let hide = document.getElementById("section1_start");
// let hide1 =document.getElementById("containp");
// function clickNow() {
//     // scs 3
//     hide00.style.display = "block";
//     hide001.style.display = "none";
//     // end 
//     // scs 2 
//     hide0.style.display = "block";
//     hide01.style.display = "none";
//     // end 
//     hide.style.display = "none";
//     hide1.style.display = "block";
//     hide1.style.backgroundColor = "whitesmoke";
// }
// function clickNowClose() 
// {
//     hide.style.display = "block";
//     hide1.style.display = "none";
// }


// // scs 2
// let hide0 = document.getElementById("section1_start1");
// let hide01 =document.getElementById("containp1");
// function clickNow1()  { //+ vadu
//     // scs 1
//     hide.style.display = "block";
//     hide1.style.display = "none";
//     // end 
//     // scs 3 
//     hide00.style.display = "block";
//     hide001.style.display = "none";
//     // end 
//     hide0.style.display = "none";
//     hide01.style.display = "block";
//     hide01.style.backgroundColor = "whitesmoke";
// }
// function clickNowClose1() 
// {
//     hide0.style.display = "block";
//     hide01.style.display = "none";
// }


// // scs 3
// let hide00 = document.getElementById("section1_start2");
// let hide001 =document.getElementById("containp2");
// function clickNow2() {
//     // scs 2 
//     hide0.style.display = "block";
//     hide01.style.display = "none";
//     // end
//     hide00.style.display = "none";
//     hide001.style.display = "block";
//     hide001.style.backgroundColor = "whitesmoke";
// }
// function clickNowClose2()
// {
//     hide00.style.display = "block";
//     hide001.style.display = "none";
// }


// // let pluse = document.getElementsByClassName("pluse");
// // let minus = document.getElementsByClassName("minus");
// function clickNow() {
//     // hide.toggleAttribute('pluse');
//     hide.classList.toggle("pluse");
// }

// function clickNowClose() {
//     hide1.classList.toggle("pluse");
// }


function clickNow(section1_start, containp) {
    section1_start.style.display = "none";
    containp.style.display = "block";
}

function clickNowClose(section1_start, containp) {
    section1_start.style.display = "block";
    containp.style.display = "none";
}