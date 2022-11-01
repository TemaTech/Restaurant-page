// Menu page
import { navbar, footer } from './home';
import '/src/styles/menu.css';


function menu() {
    // Get content container from index.html
    const content = document.querySelector('#content');
    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    const beverages = document.createElement('div');
    beverages.classList = 'beverages';
    const txtBev = document.createElement('h1');
    txtBev.textContent = 'Beverages';
    beverages.appendChild(txtBev);
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList = 'bev-container';

    createBeverage('"Space Drink"', '/src/img/Space-energy.png');
    createBeverage('"A cup of nebula"', '/src/img/a cup of nebula.png');
    createBeverage('"Space Juice"', '/src/img/space juice.png');
    createBeverage('"Space Water"', '/src/img/space water.png');

    beverages.appendChild(beveragesContainer);
    menuContainer.appendChild(beverages);




    const foods = document.createElement('div');
    foods.classList = 'foods';
    const txtFoods = document.createElement('h1');
    txtFoods.textContent = 'Foods';
    foods.appendChild(txtFoods);
    const foodsContainer = document.createElement('div');
    foodsContainer.classList = 'f-container';

    createFood('"Magma fries"', '/src/img/fries.png');
    createFood('"Pizza with galaxies"', '/src/img/pizza with galaxies.png');
    createFood('"Space breakfast"', '/src/img/space breakfast.png');
    createFood('"Planetarian burger"', '/src/img/burger with planets.png');

    foods.appendChild(foodsContainer);
    menuContainer.appendChild(foods);

    content.appendChild(menuContainer);

    function createBeverage(name, img) {
        const beverage = document.createElement('div');
        beverage.classList = 'beverage';
        const beverageImg = document.createElement('img');
        beverageImg.src = img;
        beverage.appendChild(beverageImg);
        const beverageTitle = document.createElement('h3');
        beverageTitle.textContent = name;
        beverage.appendChild(beverageTitle);
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Order';
        beverage.appendChild(buyButton);
        beveragesContainer.appendChild(beverage);
    }

    function createFood(name, img) {
        const f = document.createElement('div');
        f.classList = 'food';
        const foodImg = document.createElement('img');
        foodImg.src = img;
        f.appendChild(foodImg);
        const foodTitle = document.createElement('h3');
        foodTitle.textContent = name;
        f.appendChild(foodTitle);
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Order'
        f.appendChild(buyButton);
        foodsContainer.appendChild(f);
    }
}



export function menuPage() {
    navbar();
    menu();
    footer();
}