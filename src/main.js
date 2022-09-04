var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var priceTag = document.querySelector('.price-tag');
var overlay = document.querySelector('.overlay');

var randomButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedSection = document.querySelector('.saved-covers-section');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('load', newRandomCover);
randomButton.addEventListener('click', newRandomCover);
makeNewButton.addEventListener('click', makeYourOwn);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', goHome);
createNewBookButton.addEventListener('click', getNewBookData);
saveCoverButton.addEventListener('click', addToSaved);
savedSection.addEventListener('dblclick', deleteMiniCover);

function newRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  displayRandomCover();
}

function displayRandomCover() {
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeYourOwn() {
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function goHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
}

function getNewBookData(event) {
  event.preventDefault();
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);

  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value, userDesc2.value);

  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;

  goHome();
}

function addToSaved() {
  var coverString = currentCover.cover + currentCover.title + currentCover.tagline1 + currentCover.tagline2;
  for (let i = 0; i < savedCovers.length; i++) {
    var savedString = savedCovers[i].cover + savedCovers[i].title + savedCovers[i].tagline1 + savedCovers[i].tagline2;
    if (savedString === coverString) {
      return
    }
  }
  savedCovers.push(currentCover);
  displayMiniCover();
}

function displayMiniCover() {
  var savedCover = document.createElement('section');
  var coverImage = document.createElement('img');
  var price = document.createElement('img');
  var title = document.createElement('h2')
  var descriptors = document.createElement('h3');
  var lastElement = savedCovers.length - 1;

  coverImage.src = savedCovers[lastElement].cover;
  price.src = priceTag.src;
  title.innerText = savedCovers[lastElement].title;
  descriptors.innerText = `A tale of ${savedCovers[lastElement].tagline1} and ${savedCovers[lastElement].tagline2}`;
 
  savedSection.appendChild(savedCover);
  savedCover.appendChild(coverImage);
  savedCover.appendChild(title);
  savedCover.appendChild(descriptors);
  savedCover.appendChild(price);

  savedCover.id = savedCovers[savedCovers.length - 1].id;
  savedCover.classList.add('mini-cover');
  coverImage.classList.add('mini-cover');
  title.classList.add('cover-title');
  descriptors.classList.add('tagline');
  price.classList.add('price-tag');
}

function deleteMiniCover(event) {
  var miniCoverSection = event.target.parentElement;
  miniCoverSection.remove();

  var miniCoverId = miniCoverSection.getAttribute('id');
  
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id.toString() === miniCoverId) {
      savedCovers.splice(i, 1);
    }
  }
}
