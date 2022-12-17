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
img.src = './Img/close.svg';
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
    name: 'Fixarta',
    spec: ['Webapp', 'CEO, UI/UX', '2020'],
    brief: 'Verification app for Art and Fashion',
    description: 'A verification web-application focused on physical collectibles and powered on Ethereum Blockchain and Devery.io open-source protocol',
    image: 'Img/fixarta_1.png',
    alt: 'fixarta',
    technologies: ['Node.js', 'React', 'PHP', 'SQL', 'DeveryJs'],
    liveLink: 'https://www.fixarta.com/about',
    sourceLink: 'https://github.com/fixarta',
  },
  {
    id: '1',
    name: 'NFT Explorer',
    spec: ['POC', 'Frontend Dev, UI/UX design', '2022'],
    brief: 'XRPL NFT Explorer by Taxon',
    description: 'Designed to extend XRPL NFT Standard. NFT are combined into Collection by the same taxon customized and written on blockchain',
    image: 'Img/fixarta_2.png',
    alt: 'noft explorer',
    technologies: ['Pug', 'css', 'Node.js', 'XRPL'],
    liveLink: 'https://fixarta-xrpl-nft-explorer.herokuapp.com/',
    sourceLink: 'https://github.com/petushka1/xrpl-Non-Fungible-Token-Product-Edition-Proposal/tree/nft-explorer-group-by-taxon',
  },
  {
    id: '2',
    name: 'Mob ART Explorer',
    spec: ['App', 'Full-stack Dev', '2022'],
    brief: 'Chicago Institute of Art Explorer.',
    description: 'App built on top of Chicago Institute of Art API. Provides a list of exhibitions, artists and artworks by every specific artist.',
    image: 'Img/chicago.png',
    alt: 'art explorer',
    technologies: ['html', 'css', 'React', 'Redux', 'React Testing Library', 'npm', 'webpack'],
    liveLink: 'https://deploy-preview-2--darling-moxie-0f9a2b.netlify.app/',
    sourceLink: 'https://github.com/petushka1/chicago-art-mob-explorer',
  },
  {
    id: '3',
    name: 'Bookstore',
    spec: ['App', 'Full-stack Dev', '2022'],
    brief: 'Book Store application',
    description: 'Application allows users adding new books and remove books added previousely',
    image: 'Img/bookstore.png',
    alt: 'bookstore',
    technologies: ['html', 'css', 'React', 'Redux', 'Node.js', 'npm'],
    liveLink: 'https://bookstore-project-microverse.herokuapp.com/',
    sourceLink: 'https://github.com/petushka1/bookstore',
  },
  {
    id: '4',
    name: 'Leaderboard',
    spec: ['Webapp', 'Full-stack Dev', '2022'],
    brief: 'Game Leaderboard',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data with a use the external Leaderboard API service.',
    image: 'Img/leaderboard.png',
    alt: 'leaderboard',
    technologies: ['html', 'css', 'JavaScript', 'Node.js', 'npm'],
    liveLink: 'https://petushka1.github.io/Leaderboard/',
    sourceLink: 'https://github.com/petushka1/Leaderboard/tree/project-style',
  },
  {
    id: '5',
    name: 'To-do List',
    spec: ['Webapp', 'Full-stack Dev', '2022'],
    brief: 'Game Leaderboard',
    description: 'A To-do webapp that allows user to add, remove, edit tasks and mark task as completed',
    image: 'Img/to-do.png',
    alt: 'leaderboard',
    technologies: ['html', 'css', 'JavaScript', 'Node.js', 'npm'],
    liveLink: 'https://github.com/petushka1/to-do-list-revised',
    sourceLink: 'https://petushka1.github.io/to-do-list-revised/',
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
    img.src = 'Img/closeDark.svg';
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
    img.src = 'Img/live.svg';
    img.className = 'popupImg';
    live.appendChild(img);
    const source = document.createElement('button');
    source.className = 'btn fontSmall';
    source.id = 'source';
    source.textContent = 'See source';
    buttonBar.appendChild(source);

    img = document.createElement('img');
    img.src = 'Img/gthb.svg';
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

/*eslint-disable */
const emailField = document.getElementById('mail');
emailField.addEventListener('input', (event) => {
  if (emailField.value === emailField.value.toLowerCase()) {
    emailField.setCustomValidity('');
  } else {
    emailField.setCustomValidity('Email must be in Lower Case');
    emailField.reportValidity();
  }
});
/*eslint-disable */
