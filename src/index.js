import 'regenerator-runtime/runtime.js';
import './styles/main.scss';

import eventHandler from './module/eventHandler.js';

import logo from './assets/logo.png';
import render, { main } from './module/render.js';
import getLikes from './module/getLikes.js';


const image = document.querySelector('.header__logo');
image.innerHTML = `<img src="${logo}" alt="" class="header__logo--img"></img>`;
const meals = document.querySelector('.meals');
const getData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef',
  );
  const data = await res.json();
  meals.innerHTML = `Meals (${data.meals.length})`;
  const likes = await getLikes();
  render(data.meals, likes);
  eventHandler(data.meals);
};

getData();

const pop = document.querySelector('.pop-up');

main.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'comments') {
        pop.style.display = 'block';
        const section = document.createElement('div');
        const popup = document.createElement('div');
        popup.innerHTML = `
            <h1>Comments</h1>
            <input type="text" placeholder="Your Name">
            <textarea placeholder="Your Insight"></textarea>
            <button>Submit</button>
            <button class="close">Close</button>
        `;
        section.appendChild(popup);
        pop.appendChild(section);

    }
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        pop.style.display = 'none';
        popup.remove();
    });


});
export default getData;
