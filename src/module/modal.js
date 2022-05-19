import { main } from './render.js';
import getComments from './getComments.js';

const pop = document.querySelector('.pop-up');

const modal = () => {
  main.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'comments') {
      const commentid = e.target.parentElement.parentElement.id;
      getComments(commentid);

      pop.id = commentid;
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