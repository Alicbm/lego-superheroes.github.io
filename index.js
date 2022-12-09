const modal = document.querySelector('.modal');
const spiderman = document.getElementById('spiderman');
const robin = document.getElementById('robin');
const batman = document.getElementById('batman');
const closeButton = document.getElementById('close');

const imageOne = document.getElementById('cardImgOne');
const imageTwo = document.getElementById('cardImgTwo');
const imageThree = document.getElementById('cardImgThree');

const selectImage = (image1, image2, image3) => {
  imageOne.src = './images/' + image1;
  imageTwo.src ='./images/' + image2;
  imageThree.src ='./images/' + image3;
  modal.classList.remove('hidden');
  modal.classList.add('visible');
}

spiderman.addEventListener('click', () => selectImage('spiderman.png', 'spiderman2.png', 'spiderman3.png'));
robin.addEventListener('click', () => selectImage('robin.png', 'robin2.png', 'robin3.png'));
batman.addEventListener('click', () => selectImage('batman.webp', 'batman2.png', 'batman3.png'));

closeButton.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
})

