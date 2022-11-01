// Home page
import './styles/home-main.css';

export function navbar() {
    // Get content container from index.html
    const content = document.querySelector('#content');
    // Create navbar container
    const navbarContainer = document.createElement('nav');
    // Navbar logo section
    const navLogo = document.createElement('div');
    navLogo.className = 'nav-logo';
    const navLogoText = document.createElement('h1');
    navLogoText.textContent = 'SpaceBar';
    navLogo.appendChild(navLogoText);
    navbarContainer.appendChild(navLogo);
    // Navbar controls section
    const navControls = document.createElement('div');
    navControls.className = 'nav-controls';
    const navHome = document.createElement('button');
    navHome.textContent = 'Home';
    navControls.appendChild(navHome);
    const navMenu = document.createElement('button');
    navMenu.textContent = 'Menu';
    navControls.appendChild(navMenu);
    const navContacts = document.createElement('button');   
    navContacts.textContent = 'Contact us';
    navControls.appendChild(navContacts);
    navbarContainer.appendChild(navControls);
    content.appendChild(navbarContainer);
}

function homeMain() {
    // get contentcontainer from index.html
    const content = document.querySelector('#content');
    // Create main container
    const mainContainer = document.createElement('main');
    const billboard = document.createElement('div');
    billboard.className = 'billboard';
    const description = document.createElement('div');
    const bigText = document.createElement('h1');
    bigText.textContent = 'Try this out!';
    description.appendChild(bigText);
    const smallText = document.createElement('h3');
    smallText.textContent = 'Our new "Space Energy" for only $1.99!';
    description.appendChild(smallText);
    const button = document.createElement('button');
    button.textContent = 'Buy';
    description.appendChild(button);
    billboard.appendChild(description);
    const image = document.createElement('img');
    billboard.appendChild(image);
    mainContainer.appendChild(billboard);
    content.appendChild(mainContainer);
}

export function footer() {
    // get contentcontainer from index.html
    const content = document.querySelector('#content');
    // Create footer container
    const footerContainer = document.createElement('footer');
    const name = document.createElement('h3');
    name.textContent = 'By Chernysh Artem © ' + new Date().getFullYear();
    footerContainer.appendChild(name);
    const links = document.createElement('div');
    const gitHubLink = document.createElement('a');
    gitHubLink.textContent = 'My Github';
    gitHubLink.href = 'https://github.com/TemaTech';
    gitHubLink.setAttribute("target", "_blank");
    links.appendChild(gitHubLink);
    const twitterLink = document.createElement('a');
    twitterLink.textContent = 'My Twitter';
    twitterLink.href = 'https://twitter.com/cherrartem';
    twitterLink.setAttribute("target", "_blank");
    links.appendChild(twitterLink);
    footerContainer.appendChild(links);
    content.appendChild(footerContainer);
}

import { refresh } from "./refresh";
import { menuPage } from "./menu";
setInterval(() => {
    const button = document.querySelector('.billboard div button');
    button.addEventListener('click', () => {
        refresh();
        menuPage();
    })
})

function homePage() {
    navbar();
    homeMain();
    footer();
}

export { homePage };