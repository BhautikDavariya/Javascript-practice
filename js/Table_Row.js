
//   del.style.backgroundColor = "white";
//   del.style.color = "#ce5c5c";
//   del.style.border = "1px solid #ce5c5c";
// function deleteR() {
//     let del = document.getElementById("delete");



//     let con = confirm(`Are You Sure Your Student Id ${del.innerHTML}`)

//     let col1 = document.getElementById("col1");

//     if (con == 1) {
//         col1.style.display = "none";
//     }
//     else {
//         col1.style.display = "";
//     }
// }

// function deleteR2()
// {
//     let del = document.getElementById("delete");
//     let con = confirm(`Are You Sure Your Student Id ${del.innerHTML}`)

//     let col2 = document.getElementById("col2");

//     // col2.style.display = "none";
//     if (con == 1)
//     {
//         col2.style.display = "none";
//     }
//     else
//     {
//         col2.style.display = "";
//     }
// }

// function deleteR3()
// {
//     let del = document.getElementById("delete");
//     let con = confirm(`Are You Sure Your Student Id ${del.innerHTML}`)

//     let col3 = document.getElementById("col3");

//     // col3.style.display = "none";
//     if (con == 1)
//     {
//         col3.style.display = "none";
//     }
//     else
//     {
//         col3.style.display = "";
//     }
// }

// function deleteR4()
// {
//     let del = document.getElementById("delete");
//     let con = confirm(`Are You Sure This Student Id ${del.innerHTML}`)

//     let col4 = document.getElementById("col4");

//     // col4.style.display = "none";
//     if (con == 1)
//     {
//         col4.style.display = "none";
//     }
//     else
//     {
//         col4.style.display = "";
//     }

// }

// function deleteR5()
// {
//     let del = document.getElementById("delete");
//     let con = confirm(`Are You Sure This Student Id ${del.innerHTML}`)

//     let col5 = document.getElementById("col5");

//     // col5.style.display = "none";
//     if (con == 1)
//     {
//         col5.style.display = "none";
//     }
//     else
//     {
//         col5.style.display = "";
//     }

// }


function deleteR(col1) {
    let con = confirm("Are You Sure This Student Id Delete");
    if (con) {
        col1.style.display = "none";
    }
}