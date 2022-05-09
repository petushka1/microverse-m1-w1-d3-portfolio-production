const menu = document.querySelector('.navigation');
const header = document.querySelector('header');

let div = document.createElement('div');
div.className = 'extended';
let img = document.createElement('img');
img.className = 'icon'
img.src = './img/close.svg'
div.appendChild(img)
img.addEventListener('click', closed)

let ul =  document.createElement('ul');
ul.className = 'menu-extended';
div.appendChild(ul);

let li = document.createElement('li');
let a = document.createElement('a')
a.href = '#about'
a.textContent = 'About';
a.className = 'menu-item';
li.appendChild(a)
ul.appendChild(li);
a.addEventListener('click', closed);

li = document.createElement('li');
 a = document.createElement('a');
a.href = '#projects'
a.textContent = 'Projects';
a.className = 'menu-item';
li.appendChild(a)
ul.appendChild(li);
a.addEventListener('click', closed);

li = document.createElement('li');
a = document.createElement('a');
a.href = '#contact'
a.textContent = 'Contact';
a.className = 'menu-item';
li.appendChild(a)
ul.appendChild(li);
a.addEventListener('click', closed);

header.appendChild(div);

let btn = document.querySelector('#hmbrg');
btn.addEventListener('click', opened);

function opened() {
    div.style.display = 'block';
}

function closed () {
    div.style.display = 'none'
}
