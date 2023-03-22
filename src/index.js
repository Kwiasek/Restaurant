import home from "./components/home";
import menu from "./components/menu";
import contact from "./components/contact";

function createNav() {
  const nav = document.createElement('nav');

  const logo = document.createElement('a');
  logo.classList.add('nav-logo');
  logo.textContent = 'Restaurant';
  nav.appendChild(logo);

  const div = document.createElement('div');
  
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    const main = document.querySelector('#main');
    if (main) {
      content.removeChild(content.childNodes[2])
      content.appendChild(home());
    }
    else {
      content.appendChild(home());
    }
  })

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    const main = document.querySelector('#main');
    if (main) {
      content.removeChild(content.childNodes[2])
      content.appendChild(menu());
    }
    else {
      content.appendChild(menu());
    }
  })

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    const main = document.querySelector('#main');
    if (main) {
      content.removeChild(content.childNodes[2])
      content.appendChild(contact());
    }
    else {
      content.appendChild(contact());
    }
  })


  div.appendChild(homeButton);
  div.appendChild(menuButton);
  div.appendChild(contactButton);

  nav.appendChild(div);

  return nav;
}

const content = document.querySelector('#content');

content.appendChild(createNav());
content.appendChild(home());