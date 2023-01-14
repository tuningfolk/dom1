const p = document.createElement('p')
p.style.color = 'red'
p.textContent = "Hey! I'm red!"

const container = document.querySelector('#container')
container.appendChild(p)
