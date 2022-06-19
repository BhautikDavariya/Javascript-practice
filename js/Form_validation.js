
document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault()
});

function validation() {
  let x = document.getElementById("userNames");
  
  if (x.value == 0) {
    document.getElementById("nameEm").innerHTML = "*User Name Is Empty";
  }
  else if (x.value.length <= 5) {
    document.getElementById("nameEm").innerHTML = "*User Name Require min 5 Char..";
  }
  else if (x.value.length >= 5){
    document.getElementById("nameEm").innerHTML = "";
  }
  let y = document.getElementById("password");
  if (y.value == 0)
  {
    document.getElementById("pssEm").innerHTML = "*PassWord Is Empty";
  }
  else if (y.value.length <= 5) {
    document.getElementById("pssEm").innerHTML = "*Password length must be atleast 5 characters";
  }
  else if (y.value.length >= 5){
    document.getElementById("pssEm").innerHTML = "";
  }
}


