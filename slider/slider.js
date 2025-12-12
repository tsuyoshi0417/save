let index = 0;

const slideImage = document.getElementById('slideImage');
const nextbutton = document.getElementById('nextButton');

const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
];
nextbutton.addEventListener('click', () => {
    index(index+1) % images.length;
    slideImage.src = images[index ]
});