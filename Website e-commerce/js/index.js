const items = document.querySelectorAll('.carousel-wrapper .carousel-wrap');
let currentIndex = 0;

function showNextImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000);


const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelector(".best-sellers-product-slides");
const slideItems = document.querySelectorAll(".product-slide");
let currentIndexSilder = 0;


const slideWidth = slideItems[0].offsetWidth + 20; 
const slidesVisible = 4; 


function moveToNextSlide() {
    if (currentIndexSilder < slideItems.length - slidesVisible) {
        currentIndexSilder++;
    } else {
        currentIndexSilder = 0;  
    }
    updateSliderPosition();
}


function moveToPrevSlide() {
    if (currentIndexSilder > 0) {
        currentIndexSilder--;
    } else {
        currentIndexSilder = slideItems.length - slidesVisible; 
    }
    updateSliderPosition();
}


function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndexSilder * slideWidth}px)`;
}


nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

function toggleContent() {
    const fullContent = document.querySelector('.full-products');
    const readMoreButton = document.querySelector('.show-more');

    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        fullContent.style.display = 'block';
        readMoreButton.textContent = 'Show Less';
    } else {
        fullContent.style.display = 'none';
        readMoreButton.textContent = 'Show More';
    }
}






