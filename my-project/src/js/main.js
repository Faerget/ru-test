import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", ()=>{
    const slides = document.querySelector('.slider-wrapper');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const fractionDisplay = document.querySelector('.fraction');

    let currentIndex = 0;

    function updateButtons() {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === slide.length - 1 ? 'none' : 'block';
        fractionDisplay.textContent = `${currentIndex + 1} / ${slide.length}`;
    }
    function showSlide(index) {
        if (index < 0 || index >= slide.length) return;
        const slideWidth = slide[index].clientWidth;
        currentIndex = index;
        slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        updateButtons();
    }

    prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

    updateButtons();

    /*Карта*/
    let map;

    async function initMap() {
        const position = { lat: -25.344, lng: 131.031 };
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        map = new Map(document.getElementById("map"), {
            zoom: 4,
            center: position,
            mapId: "AIzaSyBm06aLWaE4P-3ffAJUj6hzBLdGgHitCTU",
        });
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Uluru",
        });
    }
    initMap();


})

function show() {
    let reveal = document.querySelectorAll(".animate");

    for (let i = 1; i < reveal.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveal[i].getBoundingClientRect().bottom;
        let e = 190;

        if (elementTop < windowHeight-e) {
            reveal[i].classList.add("active");}
        else {
            reveal[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", show);
