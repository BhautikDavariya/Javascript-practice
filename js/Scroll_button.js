let btn = document.getElementById("TopButton");

window.addEventListener('scroll' , function ()
{                         //px
    if (window.pageYOffset > 5) 
    {
        btn.style.display = "block";
    }
    else
    {
        btn.style.display = "none";
    }
});

/* #TopButton{
    top: 93vh;
    text-align: end;
    position: sticky;
    display: block;
} */