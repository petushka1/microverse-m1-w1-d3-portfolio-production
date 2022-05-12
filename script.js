
//Dynamic mob menu
const header = document.querySelector('header');
var div = document.createElement('div');
var menu = div;
var img = document.createElement('img');
var ul = document.createElement('ul');
var li = document.createElement('li');
var a = document.createElement('a');

function opened() {
  div.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closed() {
  div.style.display = 'none';
  document.body.style.overflow = 'unset';
}

function resetMenu() {
  if (window.innerWidth >= 768) {
    menu.style.display = 'none';
  }
}

div.className = 'extended';
img.className = 'icon';
img.src = './img/close.svg';
div.appendChild(img);
img.addEventListener('click', closed);

ul.className = 'menu-extended';
div.appendChild(ul);

a.href = '#about';
a.textContent = 'About';
a.className = 'menu-item';
li.appendChild(a);
ul.appendChild(li);
a.addEventListener('click', closed);

li = document.createElement('li');
a = document.createElement('a');
a.href = '#projects';
a.textContent = 'Projects';
a.className = 'menu-item';
li.appendChild(a);
ul.appendChild(li);
a.addEventListener('click', closed);

li = document.createElement('li');
a = document.createElement('a');
a.href = '#contact';
a.textContent = 'Contact';
a.className = 'menu-item';
li.appendChild(a);
ul.appendChild(li);
a.addEventListener('click', closed);

header.appendChild(div);

const btn = document.querySelector('#hmbrg');
btn.addEventListener('click', opened);

window.addEventListener('resize', resetMenu);

// dynamic popup script


//card template

let cardArr = [
  {
    'name': 'Tonic',
    'spec': ['CANOPY', 'Back End Dev', '2015'],
    'brief': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image': 'Img'+'\\'+'SnapshootPortfolio3.png',
    'alt': 'project 1',
    'technologies': ['html', 'css', 'javaScript'],
    'liveLink': 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    'sourceLink': 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production'
  },
  {
    'name': 'Tonic',
    'spec': ['CANOPY', 'Back End Dev', '2015'],
    'brief': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image': 'Img'+'\\'+'SnapshootPortfolio2.png',
    'alt': 'project 1',
    'technologies': ['html', 'css', 'javaScript'],
    'liveLink': 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    'sourceLink': 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production'
  },
  {
    'name': 'Tonic',
    'spec': ['CANOPY', 'Back End Dev', '2015'],
    'brief': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image': 'Img'+'\\'+'SnapshootPortfolio3.png',
    'alt': 'project 1',
    'technologies': ['html', 'css', 'javaScript'],
    'liveLink': 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    'sourceLink': 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production'
  },
  {
    'name': 'Tonic',
    'spec': ['CANOPY', 'Back End Dev', '2015'],
    'brief': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image': 'Img'+'\\'+'SnapshootPortfolio.png',
    'alt': 'project 1',
    'technologies': ['html', 'css', 'javaScript'],
    'liveLink': 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    'sourceLink': 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production'
  },
  {
    'name': 'Tonic',
    'spec': ['CANOPY', 'Back End Dev', '2015'],
    'brief': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'image': 'Img'+'\\'+'SnapshootPortfolio.png',
    'alt': 'project 1',
    'technologies': ['html', 'css', 'javaScript'],
    'liveLink': 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    'sourceLink': 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production'
  }
];


const wrapper = document.querySelector('.wrapper');

div = document.createElement('div');
div.className = 'popup';
wrapper.appendChild(div);
let popup = document.querySelector('.popup');

div = document.createElement('div');
div.className = 'popupContent fontSmall';
popup.appendChild(div);
let popupContent = popup.querySelector('.popupContent');

let h2 = document.createElement('h2');
h2.textContent = cardArr[0].name;
popupContent.appendChild(h2);

ul = document.createElement('ul');
ul.className = 'spec';
//ul.style.paddingBottom = '15px';
popupContent.appendChild(ul);

li = document.createElement('li');
li.className = 'specItem liststyle';
li.textContent = cardArr[0].spec[0];
ul.appendChild(li);

li = document.createElement('li');
li.className = 'specItem';
li.textContent = cardArr[0].spec[1];
ul.appendChild(li);

li = document.createElement('li');
li.className = 'specItem';
li.textContent = cardArr[0].spec[2];
ul.appendChild(li);

img = document.createElement('img');
img.src = cardArr[0].image;
img.className = 'snapshot';
popupContent.appendChild(img);

div = document.createElement('div');
div.className = 'select';
popupContent.appendChild(div);
let desktopPopup = popupContent.querySelector('.select');

let p = document.createElement('p');
p.textContent = cardArr[0].description;
desktopPopup.appendChild(p);

ul = document.createElement('ul');
ul.className = 'lng liststyle';
ul.style.marginBottom = '15px';
desktopPopup.appendChild(ul);

li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[0].technologies[0];
ul.appendChild(li);

li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[0].technologies[1];
ul.appendChild(li);

li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[0].technologies[2];
ul.appendChild(li);

let form = document.createElement('form');
form.className = 'buttonBar';
desktopPopup.appendChild(form);
let buttonBar = desktopPopup.querySelector('.buttonBar');

let button = document.createElement('button');
button.className = 'btn fonSmall';
button.textContent = 'Live vesrion live';
buttonBar.appendChild(button);
button.addEventListener('click', goToSource);

img = document.createElement('img');
img.src = 'img/live.svg';
img.className = 'popupImg';
button.appendChild(img);

button = document.createElement('button');
button.className = 'btn fontSmall source';
button.textContent = 'See source';
buttonBar.appendChild(button);
button.addEventListener('click', goToSource);

img = document.createElement('img');
img.src = 'img/gthb.svg';
img.className = 'popupImg';
button.appendChild(img);





// card tempate


div = document.createElement('div');
div.className = 'gridContainer';
wrapper.appendChild(div);
const gridContainer = document.querySelector('.gridContainer');


cardArr.forEach((item, i) => {

let card = document.createElement('div');
card.className = 'card round';
gridContainer.appendChild(card);

let snapshot = document.createElement('img');
snapshot.className = 'snapshot';
snapshot.src = cardArr[i].image;
snapshot.alt = cardArr[i].alt;
card.appendChild(snapshot);

let cardContent = document.createElement('div');
cardContent.className = 'cardContent';
card.appendChild(cardContent);

let header = document.createElement('h2');
header.textContent = cardArr[i].name;
cardContent.appendChild(header);

let speclist = document.createElement('ul');
speclist.className = 'spec';
cardContent.appendChild(speclist);
let specArr = cardArr[i].spec;
  for (let j = 0; j < specArr.length; j++) {
    li = document.createElement('li');
    li.className = 'specItem';
    li.textContent = specArr[j];
    speclist.appendChild(li);
  }

let paragraph = document.createElement('p');
paragraph.textContent = cardArr[i].brief;
cardContent.appendChild(paragraph);

ul = document.createElement('ul');
ul.className = 'lng liststyle';
ul.style.marginBottom = '15px';
cardContent.appendChild(ul);
li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[i].technologies[0];
ul.appendChild(li);
li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[i].technologies[1];
ul.appendChild(li);
li = document.createElement('li');
li.className = 'tech';
li.textContent = cardArr[i].technologies[2];
ul.appendChild(li);
const details  = document.createElement('button');
details.className = 'btn details';
details.textContent = 'See project';
details.name = 'details';
details.type = 'button';
cardContent.appendChild(details);
details.addEventListener('click', opened);
});



// Open links when popup buttons clicked

function goToSource(url) {
  if (document.getElementById('live')) {
      window.open(cardArr[0].liveLink);
  }
  else if (document.getElementById('source')) {
      window.open(cardArr[0].sourceLink);
  }
}

//Card Button function

if (window.innerWidth >= 768) {
  popupContent.querySelector('.snapshot').classList.toggle('crop');
  popupContent.querySelector('p').classList.toggle('popupParagraph');
  popupContent.querySelector('.select').classList.toggle('desktopPopup');
  desktopPopup.querySelector('.lng').classList.toggle('lngPopup');
  desktopPopup.querySelector('.lngPopup').classList.remove('lng');
}



function opened() {
  popup.style.display = 'block';
  popup.style.overflow ='scroll';
  popupContent.style.overflow ='hidden';
}
