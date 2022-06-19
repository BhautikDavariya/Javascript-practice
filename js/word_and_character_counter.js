// let userInput = document.getElementById("inputword");

// userInput.addEventListener('input' , function () {
    
//    let char = this.value.length;
//    document.getElementById("sp2").innerHTML = char;

//     let words = this.value.length.split(" ");
//     document.getElementById("sp1").innerHTML = words.length;
// });

let user = document.getElementById("inputword");
user.addEventListener("input",function()
{
    let user = this.value.trim();
    let chr = user.length;
    
    document.getElementById("sp2").innerHTML = chr;
    let wrd = user.split(" ");

    let newWord = wrd.filter(function(e){ 
        return e != ""; 
    });

    document.getElementById("sp1").innerHTML = newWord.length;
});