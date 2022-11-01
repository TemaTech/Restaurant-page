import { homePage } from "./home";
import { contact } from "./contact";
import { menuPage } from "./menu";
import './styles/navbar.css';
import './styles/footer.css';

homePage();

import { refresh } from "./refresh";
setInterval(() => {
    const navButtons = document.querySelectorAll('nav button');
    navButtons[0].addEventListener('click', () => {
        refresh();
        homePage();
    });
    navButtons[1].addEventListener('click', () => {
        refresh();
        menuPage();
    });
    navButtons[2].addEventListener('click', () => {
        refresh();
        contact();
    }, 100)
})