document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    
    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slideCount;
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
    
    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
    
});
    