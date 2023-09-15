const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.transform = 'translateX(0)';
        } else {
            img.style.transform = 'translateX(100%)';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

setInterval(nextSlide, 2000);

updateSlider();