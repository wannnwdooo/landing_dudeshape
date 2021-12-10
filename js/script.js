const images = document.querySelectorAll('.slider__block .slider__block__line img');
const sliderBlockLine = document.querySelector('.slider__block__line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider__block').offsetWidth;
    sliderBlockLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-button__prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-button__next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderBlockLine.style.transform = 'translate(-'+count*width+"px)";
}

