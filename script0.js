
//Dynamic mob menu
const header = document.querySelector('header');
var div = document.createElement('div');
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
    div.style.display = 'none';
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

let item1 = {};
let item2 = {};
let item3 = {};
let item4 = {};

//card template
let item = {
  id: '',
  name: '',
  spec: ['', '', ''],
  description: '',
  image: '',
  technologies: ['', '', ''],
  liveLink: '',
  sourceLink: ''
};
var id = '';

let popupArr = [{}, {}, {}, {}];

let cardArr = Array.from(document.querySelectorAll('.card'));
for (let i = 1; i < cardArr.length; i++) {
  cardArr.id;
}


popupArr[i]

/*
let item0 = document.getElementById('item1');
item2.id = item0.id;
item2.name = item0.querySelector('h2').innerHTML;
item2.spec = Array.from(item0.querySelectorAll('.spec>li'));
item2.description = item0.querySelector('.description').textContent;
item2.image = item0.querySelector('img').src;
item2.technologies = Array.from(item0.querySelectorAll('.lng>li'));
item2.liveLink = item0.querySelector('.liveLink').href;
item2.sourceLink = item0.querySelector('.sourceLink').href;
*/

console.log(item.spec);

//console.log(item.image);



const wrapper = document.querySelector('.wrapper');

div = document.createElement('div');
div.className = 'popup';
wrapper.appendChild(div);
let popup = wrapper.querySelector('.popup');

div = document.createElement('div');
div.className = 'popupContent fontSmall';
popup.appendChild(div);
let popupContent = popup.querySelector('.popupContent');


let h2 = document.createElement('h2');
h2.textContent = item2.name;
popupContent.appendChild(h2);

ul = document.createElement('ul');
ul.className = 'spec';
//ul.style.paddingBottom = '15px';
popupContent.appendChild(ul);

li = document.createElement('li');
li.className = 'specItem liststyle';
li.textContent = item2.spec[0].textContent;
ul.appendChild(li);

li = document.createElement('li');
li.className = 'specItem';
li.textContent = item2.spec[1].textContent;
ul.appendChild(li);

li = document.createElement('li');
li.className = 'specItem';
li.textContent = item2.spec[2].textContent;
ul.appendChild(li);

img = document.createElement('img');
img.src = item2.image;
img.className = 'snapshot';
popupContent.appendChild(img);

let p = document.createElement('p');
p.textContent = item2.description;
popupContent.appendChild(p);

ul = document.createElement('ul');
ul.className = 'lng liststyle';
ul.style.marginBottom = '15px';
popupContent.appendChild(ul);

li = document.createElement('li');
li.className = 'tech';
li.textContent = item2.technologies[0].textContent;
ul.appendChild(li);

li = document.createElement('li');
li.className = 'tech';
li.textContent = item2.technologies[1].textContent;
ul.appendChild(li);

li = document.createElement('li');
li.className = 'tech';
li.textContent = item2.technologies[2].textContent;
ul.appendChild(li);

let form = document.createElement('form');
form.className = 'buttonBar';
popupContent.appendChild(form);
let buttonBar = popupContent.querySelector('.buttonBar');

let button = document.createElement('button');
button.className = 'btn fontMid';
button.textContent = 'Live vesrion';
button.id = 'live',
buttonBar.appendChild(button);
button.addEventListener('click', goToSource);

img = document.createElement('img');
img.src = 'img/live.svg';
img.className = 'popupImg';
button.appendChild(img);

button = document.createElement('button');
button.className = 'btn fontMid';
button.textContent = 'See source';
button.id = 'source',
buttonBar.appendChild(button);
button.addEventListener('click', goToSource);

img = document.createElement('img');
img.src = 'img/gthb.svg';
img.className = 'popupImg';
button.appendChild(img);

// Open links when popup buttons clicked

function goToSource(url) {
  if (document.getElementById('live')) {
      window.open(item2.liveLink);
  }
  else if (document.getElementById('source')) {
      window.open(item2.sourceLink);
  }
}
/*
for (let i = 0; i < popupArr.length; i++) {
  let obj = popupArr[i];
  h2.textContent = obj.name;
}
*/

/* textContent from cards by ID */
const details = wrapper.querySelector('.details');
details.addEventListener('click', opened);

/*let sourceItem = wrapper.querySelector('item')

if (details) {

}

let itemName =
*/
function opened() {
  popup.style.display = 'block';
  popup.style.overflow ='scroll';
  popupContent.style.overflow ='hidden';
}















/*
function openDetails() {
  details.parentElement.style.display = 'inline-block';
  text.style.display = 'none';
  popup.style.n-thchild()order = '1;'
}

let popup = document.querySelector('.popup');
const details = popup.querySelector('button');
let text = popup.querySelector('p');
let spec = popup.querySelector('.spec');
// const text = document.querySelectorAll('.popup-text');


details.addEventListener('click', openDetails);
*/
