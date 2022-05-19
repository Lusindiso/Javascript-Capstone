import 'regenerator-runtime/runtime.js';
import './styles/main.scss';
import logo from './assets/logo.png';
import render, { main } from './module/render.js';

const image = document.querySelector('.header__logo--img');
const meals = document.querySelector('.meals');
image.src = logo;

const getData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef',
  );
  const data = await res.json();
  render(data.meals);
  meals.innerHTML = `Meals (${data.meals.length})`;
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
  close.addEventListener('click', (e) => {
    e.preventDefault();
    pop.style.display = 'none';
  });
});