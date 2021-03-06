import { main } from './render.js';
import getComments from './getComments.js';
import getMeal from './getMeal.js';
import renderComments from './renderComments.js';
import commentsCounter from './commentsCounter.js';

const commentHeader = document.querySelector('.comment-header');
const pop = document.querySelector('.pop-up');
const meal = document.querySelector('.meal');

const modal = () => {
  main.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.id === 'comments') {
      const commentid = e.target.parentElement.parentElement.id;
      getComments(commentid);
      pop.id = commentid;
      pop.style.display = 'flex';
      let data = await getMeal(commentid);
      data = data.meals;
      meal.innerHTML = `<div>
        <img src="${data[0].strMealThumb}" alt="" class="card__img" />
        <h2 class="title">${data[0].strMeal}</h2>
        <p class="category"><span>Category:</span> <span>${data[0].strCategory}</span></p>
        <p class="country"><span>Country:</span> <span>${data[0].strArea}</span></p>
      </div>`;
      const commentList = await getComments(commentid);
      renderComments(commentList);
      commentHeader.innerText = `${commentsCounter(commentList)}`;
    }
    const close = document.querySelector('.close');
    close.addEventListener('click', (e) => {
      e.preventDefault();
      pop.style.display = 'none';
      commentHeader.innerText = '';
      renderComments([]);
    });
  });
};
export default modal;