import postLikes from './postLikes.js';

const like = document.querySelector('.main');

const eventHandler = () => {
  like.onclick = async (e) => {
    if (e.target.id === 'like') {
      const mealId = e.target.parentNode.parentNode.parentNode.id;
      await postLikes(mealId);
      // eslint-disable-next-line no-plusplus
      e.target.nextElementSibling.innerText++;
    }
  };
};

export default eventHandler;
