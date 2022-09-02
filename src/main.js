var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button hidden');
var randomButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = null;

// Add your event listeners here 👇 (should go at the bottom)
window.addEventListener('load', testFunc);
randomButton.addEventListener('click', testFunc);

// Create your event handlers and other functions here 👇
function getRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  return randomCover;
}

function displayCurrentCover(cover) {
  coverImage.src = cover.cover;
  title.innerText = cover.title;
  descriptor1.innerText = cover.tagline1;
  descriptor2.innerText = cover.tagline2;
}

function testFunc() {
  return displayCurrentCover(getRandomCover())
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
