const menu = document.querySelector('.navigation');
const header = document.querySelector('header');

let div = document.createElement('div');
div.className = 'extended';

let ul =  document.createElement('ul');
ul.className = 'menu-extended';
div.appendChild(ul);

let li = document.createElement('li');
li.textContent = 'About';
ul.appendChild(li);
li = document.createElement('li');
li.textContent = 'Projects';
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'Contact';
ul.appendChild(li);

header.appendChild(div);

let btn = document.querySelector('#hmbrg');
btn.addEventListener('click', opened);

function opened() {
    div.style.display = 'block';
}
