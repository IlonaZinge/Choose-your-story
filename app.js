const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')
//Mobile 
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);
app.use(express.static('public', { 'Content-Type': 'application/javascript' }));

function handleChoice(nextNode) {
  // nächsten Story Node abrufen
  fetch('/getStoryNode/' + nextNode)
    .then(response => response.json())
    .then(data => {
      const storyText = document.querySelector('#storyText h2');
      storyText.textContent = data.text;
      const optionsContainer = document.getElementById('options-container');
      optionsContainer.innerHTML = '';
      data.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice.nextNode));
        optionsContainer.appendChild(button);
      });
    })
    .catch(error => console.error(error));
}
