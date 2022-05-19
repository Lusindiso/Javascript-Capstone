import 'regenerator-runtime/runtime.js';
import './styles/main.scss';

import eventHandler from './module/eventHandler.js';

import logo from './assets/logo.png';
import getLikes from './module/getLikes.js';
import render from './module/render.js';

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

export default getData;