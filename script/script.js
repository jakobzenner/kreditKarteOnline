var slideIndex = 1;
showDivs(slideIndex);

/*function plusDivs(n) {
}
*/

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "inline-flex";
    dots[slideIndex - 1].className += " w3-white";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "inline-flex";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

function myFunction() {
    var x = document.getElementById("links");
    let b = document.getElementById("box-agent");
    let logo = document.querySelector("a#logo");

    if ((x.style.display === "block") || (b.style.display === "none") || (logo.style.backgroundColor === "rgb(35, 54, 154)")) {
        x.style.display = "none";
        b.style.display = "block";
        logo.style.backgroundColor = "rgb(35, 54, 154,0)";
    } else {
        x.style.display = "block";
        b.style.display = "none";
        logo.style.backgroundColor = "rgb(35, 54, 154)";

    }

}