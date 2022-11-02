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

    createBeverage('"Space Drink"', '1');
    createBeverage('"A cup of nebula"', '2');
    createBeverage('"Space Juice"', '3');
    createBeverage('"Space Water"', '4');

    beverages.appendChild(beveragesContainer);
    menuContainer.appendChild(beverages);




    const foods = document.createElement('div');
    foods.classList = 'foods';
    const txtFoods = document.createElement('h1');
    txtFoods.textContent = 'Foods';
    foods.appendChild(txtFoods);
    const foodsContainer = document.createElement('div');
    foodsContainer.classList = 'f-container';

    createFood('"Magma fries"', '1');
    createFood('"Pizza with galaxies"', '2');
    createFood('"Space breakfast"', '3');
    createFood('"Planetarian burger"', '4');

    foods.appendChild(foodsContainer);
    menuContainer.appendChild(foods);

    content.appendChild(menuContainer);

    function createBeverage(name, classNum) {
        const beverage = document.createElement('div');
        beverage.classList = 'beverage' + ' ' + 'bev' + classNum;
        const beverageImg = document.createElement('img');
        beverage.appendChild(beverageImg);
        const beverageTitle = document.createElement('h3');
        beverageTitle.textContent = name;
        beverage.appendChild(beverageTitle);
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Order';
        beverage.appendChild(buyButton);
        beveragesContainer.appendChild(beverage);
    }

    function createFood(name, classNum) {
        const f = document.createElement('div');
        f.classList = 'food' + ' ' + 'f' + classNum;
        const foodImg = document.createElement('img');
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