let index = 0;

const slideImage = document.getElementById('slideImage');
const nextbutton = document.getElementById('nextButton');

const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
];
nextbutton.addEventListener('click', () => {
    index+1;
    slideImage.src = images[index ]
});