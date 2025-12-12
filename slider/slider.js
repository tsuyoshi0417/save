let index = 0;

// HTML から要素を取ってくる
const slideImage = document.getElementById('slideImage');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// ここは実際のファイル名に合わせる
const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
];

// 「次へ」ボタン
nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length; // 0→1→2→0→…
    slideImage.src = images[index];
});

// 「戻る」ボタン
prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    slideImage.src = images[index];
});