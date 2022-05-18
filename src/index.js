import 'regenerator-runtime/runtime.js';
import './styles/main.scss';
import logo from './assets/logo.png';
import render from './module/render.js';

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
