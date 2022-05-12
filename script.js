
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
    'id': '0',
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
    'id': '1',
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
    'id': '2',
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
    'id': '3',
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
    'id': '4',
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
details.id = cardArr[i].id;
cardContent.appendChild(details);
details.addEventListener('click', opened);
});

// Open links when popup buttons clicked

function goToSource(url) {
  if (live) {
      window.open(cardArr[0].liveLink);
  }
  else if (source) {
      window.open(cardArr[0].sourceLink);
  }
}



//Card Button function



function opened(e) {
  let j = e.target.id;
  let popup = document.createElement('div');
  popup.className = 'popup';
  wrapper.appendChild(popup);
  
  function closePopup() {
      let targetPopap = document.querySelector('.popup');
      popup.style.display = 'none';
  }

  let popupContent = document.createElement('div');
  popupContent.className = 'popupContent fontSmall';
  popup.appendChild(popupContent);

  img = document.createElement('img');
  img.src = './img/closeDark.svg';
  img.className = 'close';
  popupContent.appendChild(img);
  img.addEventListener('click', closePopup);

  let popupHeader = document.createElement('h2');
  popupHeader.textContent = cardArr[j].name;
  popupContent.appendChild(popupHeader);

  ul = document.createElement('ul');
  ul.className = 'spec';
  popupContent.appendChild(ul);
  li = document.createElement('li');
  li.className = 'specItem liststyle';
  li.textContent = cardArr[j].spec[0];
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'specItem';
  li.textContent = cardArr[j].spec[1];
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'specItem';
  li.textContent = cardArr[j].spec[2];
  ul.appendChild(li);
  let popupSnapshot = document.createElement('img');
  popupSnapshot.src = cardArr[j].image;
  popupSnapshot.className = 'crop';
  popupContent.appendChild(popupSnapshot);
  let desktopPopup = document.createElement('div');
  desktopPopup.className = 'select';
  popupContent.appendChild(desktopPopup);
  let popupParagraph = document.createElement('p');
  popupParagraph.className = 'popupParagraph';
  popupParagraph.textContent = cardArr[j].description;
  desktopPopup.appendChild(popupParagraph);
  let desktopRight = document.createElement('div');
  desktopRight.className = 'desktopRight';
  desktopPopup.appendChild(desktopRight);
  ul = document.createElement('ul');
  ul.className = 'lng liststyle';
  ul.style.marginBottom = '15px';
  desktopRight.appendChild(ul);
  li = document.createElement('li');
  li.className = 'tech';
  li.textContent = cardArr[j].technologies[0];
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'tech';
  li.textContent = cardArr[j].technologies[1];
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'tech';
  li.textContent = cardArr[j].technologies[2];
  ul.appendChild(li);
  let buttonBar = document.createElement('form');
  buttonBar.className = 'buttonBar';
  desktopRight.appendChild(buttonBar);
  let live = document.createElement('button');
  live.className = 'btn fontSmall live';
  live.textContent = 'Live vesrion';
  buttonBar.appendChild(live);
  live.addEventListener('click', goToSource);
  img = document.createElement('img');
  img.src = 'img/live.svg';
  img.className = 'popupImg';
  live.appendChild(img);
  let source = document.createElement('button');
  source.className = 'btn fontSmall source';
  source.textContent = 'See source';
  buttonBar.appendChild(source);
  source.addEventListener('click', goToSource);
  img = document.createElement('img');
  img.src = 'img/gthb.svg';
  img.className = 'popupImg';
  source.appendChild(img);
  if (window.innerWidth < 768) {
    popupSnapshot.classList.toggle('snapshot');
    popupSnapshot.classList.remove('crop');
    popupParagraph.classList.remove('popupParagraph');
    popupParagraph.classList.remove('desktopRight');
  }
  popup.style.display = 'flex';
  popup.style.overflow ='scroll';
  popupContent.style.overflow ='hidden';
}

if (window.innerWidth >= 768) {
  popupContent.classList.toggle('crop');
  popupParagraph.classList.toggle('popupParagraph');
  popupContent.classList.toggle('desktopPopup');
  desktopPopup.querySelector('.lng').classList.toggle('lngPopup');

}
