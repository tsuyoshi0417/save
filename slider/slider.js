let index = 0;

const slideImage = document.getElementById('slideImage');
const nextbutton = document.getElementById('nextButton');

const images = [
    'images/3089298F-9C80-4B91-8BBE-C2EAACF18F44_1_100_o.jpeg',
    'images/photo2.jpg',
    'images/photo3.jpg',
];
nextbutton.addEventListener('click', () => {
    index+1;
    slideImage.src = images[index ]
});