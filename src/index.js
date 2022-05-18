import 'regenerator-runtime/runtime.js';
import './styles/main.scss';
import logo from './assets/logo.png';
import render from './module/render.js';

const image = document.querySelector('.header__logo--img');

image.src = logo;

const getData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef',
  );
  const data = await res.json();
  console.log(data.meals);
  await render(data.meals);
};

getData();
