// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var tagline = `A tale of ${descriptor1} and ${descriptor2}`;
var button = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇 (should go at the bottom)
window.addEventListener('load', newRandomCover)
button.addEventListener('click', newRandomCover)

// Create your event handlers and other functions here 👇
function newRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
    coverImage.src = currentCover.cover;
    title.innerText = currentCover.title;
    descriptor1.innerText = currentCover.tagline1;
    descriptor2.innerText = currentCover.tagline2;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
