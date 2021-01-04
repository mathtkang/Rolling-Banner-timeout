let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 2000);
}