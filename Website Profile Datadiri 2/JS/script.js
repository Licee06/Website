let currentIndex = 0;
let slidesToShow = 3; // Default to 3 for desktop

function updateSlidesToShow() {
    if (window.innerWidth <= 480) {
        slidesToShow = 1; // 1 slide for mobile
    } else if (window.innerWidth <= 768) {
        slidesToShow = 2; // 2 slides for tablet
    } else {
        slidesToShow = 3; // 3 slides for desktop
    }
}
setInterval(() => {
    moveSlide(1); // Move to the next slide
}, 3000);

function moveSlide(direction) {
    const slides = document.querySelector('.project-slides');
    const totalSlides = document.querySelectorAll('.project-slide').length;
    
    currentIndex += direction;

    // Loop around if we go past the first or last slide
    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesToShow; // Go to the last group
    } else if (currentIndex > totalSlides - slidesToShow) {
        currentIndex = 0; // Go to the first group
    }

    // Move the slides container
    slides.style.transform = `translateX(-${currentIndex * (270)}px)`; // 250px width + 5px margin
}

// Update slidesToShow on load and resize
updateSlidesToShow();
window.addEventListener('resize', updateSlidesToShow);

const inputs = document.querySelectorAll('.input-wrap input, .input-wrap textarea');

inputs.forEach(input =>{
    const label = input.nextElementSibling;

    input.addEventListener('focus', () =>{
        label.classList.add('active');
    });

    input.addEventListener('blur', () =>{
        if(!input.value){
            label.classList.remove('active')
        }
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
    } else {
        navBar.classList.add('active'); 
    }
};


