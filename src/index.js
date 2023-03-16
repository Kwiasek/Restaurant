function createNav () {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.setAttribute('id', 'nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
    })
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

const content = document.querySelector('#content');


content.appendChild(createNav());