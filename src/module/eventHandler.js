import getLikes from './getLikes.js';
import postLikes from './postLikes.js';
import render from './render.js';

const like = document.querySelector('.main');

const eventHandler = (data) => {
  like.onclick = async (e) => {
    if (e.target.id === 'like') {
      const mealId = e.target.parentNode.parentNode.parentNode.id;
      postLikes(mealId);
      const likes = await getLikes();
      await render(data, likes);
    }
  };
};

export default eventHandler;
