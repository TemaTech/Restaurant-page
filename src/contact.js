// Contact page
import { navbar, footer } from './home';
import './styles/contact.css';


function ContactPage() {
    // Get content container from index.html
    const content = document.querySelector('#content');
    // Create contact container
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    const mapCont = document.createElement('div');
    mapCont.className = 'map-container';
    const mapTxt = document.createElement('h2');
    mapTxt.textContent = 'You can find us here:';
    mapCont.appendChild(mapTxt);
    const mapImg = document.createElement('img');
    mapCont.appendChild(mapImg);
    contactContainer.appendChild(mapCont);
    const numCont = document.createElement('div');
    numCont.className = 'num-container';
    const numTxt = document.createElement('h2');
    numTxt.textContent = "Our number:";
    numCont.appendChild(numTxt);
    const number = document.createElement('h2');
    number.textContent = '+1 123 1234 123';
    numCont.appendChild(number);
    contactContainer.appendChild(numCont);
    content.appendChild(contactContainer);
}



export function contact() {
    navbar();
    ContactPage();
    footer();
}