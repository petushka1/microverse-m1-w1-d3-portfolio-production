// Dynamic mob menu
const header = document.querySelector('header');
let div = document.createElement('div');
const menu = div;
let img = document.createElement('img');
let ul = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('a');

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

// card template
const cardArr = [
  {
    id: '0',
    name: 'Tonic',
    spec: ['CANOPY', 'Back End Dev', '2015'],
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Img/SnapshootPortfolio3.png',
    alt: 'project 1',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '1',
    name: 'Tonic',
    spec: ['CANOPY', 'Back End Dev', '2015'],
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Img/SnapshootPortfolio2.png',
    alt: 'project 1',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '2',
    name: 'Tonic',
    spec: ['CANOPY', 'Back End Dev', '2015'],
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Img/SnapshootPortfolio3.png',
    alt: 'project 1',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '3',
    name: 'Tonic',
    spec: ['CANOPY', 'Back End Dev', '2015'],
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Img/SnapshootPortfolio.png',
    alt: 'project 1',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production/',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
  {
    id: '4',
    name: 'Tonic',
    spec: ['CANOPY', 'Back End Dev', '2015'],
    brief: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Img/SnapshootPortfolio.png',
    alt: 'project 1',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://petushka1.github.io/microverse-m1-w1-d3-portfolio-production',
    sourceLink: 'https://github.com/petushka1/microverse-m1-w1-d3-portfolio-production',
  },
];

const wrapper = document.querySelector('.wrapper');

// card tempate
div = document.createElement('div');
div.className = 'gridContainer';
wrapper.appendChild(div);
const gridContainer = document.querySelector('.gridContainer');

cardArr.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'card round';
  gridContainer.appendChild(card);

  const snapshot = document.createElement('img');
  snapshot.className = 'cardSnapshot';
  snapshot.src = cardArr[i].image;
  snapshot.alt = cardArr[i].alt;
  card.appendChild(snapshot);

  const cardContent = document.createElement('div');
  cardContent.className = 'cardContent';
  card.appendChild(cardContent);

  const header = document.createElement('h2');
  header.textContent = cardArr[i].name;
  cardContent.appendChild(header);

  const speclist = document.createElement('ul');
  speclist.className = 'spec';
  cardContent.appendChild(speclist);
  const specArr = cardArr[i].spec;
  for (let j = 0; j < specArr.length; j += 1) {
    li = document.createElement('li');
    li.className = 'specItem';
    li.textContent = specArr[j];
    speclist.appendChild(li);
  }

  const paragraph = document.createElement('p');
  paragraph.textContent = cardArr[i].brief;
  cardContent.appendChild(paragraph);

  ul = document.createElement('ul');
  ul.className = 'lng liststyle';
  ul.style.marginBottom = '15px';
  cardContent.appendChild(ul);
  li = document.createElement('li');
  li.className = 'tech';
  let [first, second, third] = cardArr[i].technologies;
  li.textContent = first;
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'tech';
  li.textContent = second;
  ul.appendChild(li);
  li = document.createElement('li');
  li.className = 'tech';
  li.textContent = third;
  ul.appendChild(li);
  const details = document.createElement('button');
  details.className = 'btn details';
  details.textContent = 'See project';
  details.name = 'details';
  details.type = 'button';
  details.id = cardArr[i].id;

  // Card Button function
  function openPopup(e) {
    const j = e.target.id;
    const popup = document.createElement('div');
    popup.className = 'popup';
    wrapper.appendChild(popup);

    function closePopup() {
      popup.style.display = 'none';
    }

    const popupContent = document.createElement('div');
    popupContent.className = 'popupContent fontSmall';
    popup.appendChild(popupContent);

    img = document.createElement('img');
    img.src = 'img/closeDark.svg';
    img.className = 'close';
    popupContent.appendChild(img);
    img.addEventListener('click', closePopup);

    const popupHeader = document.createElement('h2');
    popupHeader.textContent = cardArr[j].name;
    popupContent.appendChild(popupHeader);

    ul = document.createElement('ul');
    ul.className = 'spec';
    popupContent.appendChild(ul);
    [first, second, third] = cardArr[i].spec;
    li = document.createElement('li');
    li.className = 'specItem liststyle';
    li.textContent = first;
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'specItem';
    li.textContent = second;
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'specItem';
    li.textContent = third;
    ul.appendChild(li);
    const popupSnapshot = document.createElement('img');
    popupSnapshot.src = cardArr[j].image;
    popupSnapshot.className = 'crop';
    popupContent.appendChild(popupSnapshot);
    const desktopPopup = document.createElement('div');
    desktopPopup.className = 'select';
    popupContent.appendChild(desktopPopup);
    const popupParagraph = document.createElement('p');
    popupParagraph.className = 'popupParagraph';
    popupParagraph.textContent = cardArr[j].description;
    desktopPopup.appendChild(popupParagraph);
    const desktopRight = document.createElement('div');
    desktopRight.className = 'desktopRight';
    desktopPopup.appendChild(desktopRight);
    ul = document.createElement('ul');
    ul.className = 'lng liststyle';
    ul.style.marginBottom = '15px';
    desktopRight.appendChild(ul);
    [first, second, third] = cardArr[j].technologies;
    li = document.createElement('li');
    li.className = 'tech';
    li.textContent = first;
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'tech';
    li.textContent = second;
    ul.appendChild(li);
    li = document.createElement('li');
    li.className = 'tech';
    li.textContent = third;
    ul.appendChild(li);
    const buttonBar = document.createElement('form');
    buttonBar.className = 'buttonBar';
    desktopRight.appendChild(buttonBar);

    const live = document.createElement('button');
    live.className = 'btn fontSmall';
    live.id = 'live';
    live.textContent = 'Live vesrion';
    buttonBar.appendChild(live);

    img = document.createElement('img');
    img.src = 'img/live.svg';
    img.className = 'popupImg';
    live.appendChild(img);
    const source = document.createElement('button');
    source.className = 'btn fontSmall';
    source.id = 'source';
    source.textContent = 'See source';
    buttonBar.appendChild(source);

    img = document.createElement('img');
    img.src = 'img/gthb.svg';
    img.className = 'popupImg';
    source.appendChild(img);
    function goToLive() {
      window.open(cardArr[0].liveLink);
    }
    function goToSource() {
      window.open(cardArr[0].sourceLink);
    }
    live.addEventListener('click', goToLive);
    source.addEventListener('click', goToSource);

    if (window.innerWidth < 768) {
      popupParagraph.classList.remove('popupParagraph');
      popupParagraph.classList.remove('desktopRight');
    }
    popup.style.display = 'block';
    popup.style.overflow = 'auto';
  }

  cardContent.appendChild(details);
  details.addEventListener('click', openPopup);
});
