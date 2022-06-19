var UserYear = prompt("Enter Your BYear : ");
var UserMothe = prompt("Enter Your BMonth : ");
var UserDate = prompt("Enter Your BDate : ");


var UserInpur = document.write(`Your Date Is : ${UserYear} - ${UserMothe} - ${UserDate}`);

// aaj ni date 
var runingDate = new Date();
document.write("<br>")
document.write("<br>")

// user ni date 
var UserBday = new Date(UserYear, UserMothe-1, UserDate);
// document.write(UserBday);
// document.write("<br>")
// document.write("<br>")

// user date thi aaj ni date sudhi ni msecond
// document.write("<br>")
// document.write("<br>")
var BdayMs = UserBday;
// document.write(BdayMs.getTime());
// document.write(`User Msecond Is : ${Math.floor(BdayMs)}`);

// 1 jan 1970 thi lai ne aaj ni date ni msecond
// document.write("<br>")
// document.write("<br>")
var runingBdayMs = runingDate;
// document.write(runingBdayMs.getTime());
// document.write(`today Msecond Is : ${Math.floor(runingBdayMs)}`);

// user and aaj ni date msecond vache ni msecond 
// document.write("<br>")
// document.write("<br>")
var Ms_Bday = runingBdayMs - BdayMs;
document.write(`Bday Mscond : ${Ms_Bday}`);

document.write("<br>")
document.write("<br>")
var BdayYear = Ms_Bday/1000/60/60/24/365;
document.write(`Your Age/Year Is : ${Math.floor(BdayYear)}`);

document.write("<br>")
document.write("<br>")
var BdayMonth = (Ms_Bday/1000/60/60/24/365)*12;
document.write(`Your Month Is : ${Math.floor(BdayMonth)}`);

document.write("<br>")
document.write("<br>")
var BdayDay = Ms_Bday/1000/60/60/24;
document.write(`Your Days Is : ${Math.floor(BdayDay)}`);


document.write("<br>")
document.write("<br>")
var BdayHouers = Ms_Bday/1000/60/60;
document.write(`hours Is : ${Math.floor(BdayHouers)}`);


document.write("<br>")
document.write("<br>")
var BdayMinutes = Ms_Bday/1000/60;
document.write(`Minutes Is : ${Math.floor(BdayMinutes)}`);