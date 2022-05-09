const header = document.querySelector('header');
const div = document.createElement('div');
const img = document.createElement('img');
const ul = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('a');

function opened() {
  div.style.display = 'block';
}

function closed() {
  div.style.display = 'none';
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
