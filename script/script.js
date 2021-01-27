let slideIndex = 1;
showDivs(slideIndex);

/*function plusDivs(n) {
}
*/

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    slides[slideIndex - 1].style.display = "inline-flex";
    dots[slideIndex - 1].className += " w3-white";
}

let myIndex = 0;
carousel();

function carousel() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides.length) { myIndex = 1 }
    slides[myIndex - 1].style.display = "inline-flex";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

function hamburgerMenu() {
    let links = document.getElementById("links");
    let agentBox = document.getElementById("box-agent");
    let logo = document.querySelector("a#logo");

    if ((links.style.display === "block") || (agentBox.style.display === "none") || (logo.style.backgroundColor === "rgb(35, 54, 154)")) {
        links.style.display = "none";
        agentBox.style.display = "block";
        logo.style.backgroundColor = "rgb(35, 54, 154,0)";
    } else {
        links.style.display = "block";
        agentBox.style.display = "none";
        logo.style.backgroundColor = "rgb(35, 54, 154)";

    }

}