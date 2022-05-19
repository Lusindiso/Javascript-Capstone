import { main } from './render.js';

const pop = document.querySelector('.pop-up');

const modal = () => {
  main.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'comments') {
      pop.style.display = 'block';
    }

    const close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
      e.preventDefault();
      pop.style.display = 'none';
    });
  });
};

export default modal;