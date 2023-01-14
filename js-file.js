//first
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";

const container = document.querySelector('#container');
container.appendChild(p);

//second
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

//third
const div = document.createElement('div');
div.style.cssText = 'background: black; border: 10px solid pink;';
div.setAttribute('id', 'newDiv');

document.body.appendChild(div);

