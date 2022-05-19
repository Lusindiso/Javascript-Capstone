const main = document.querySelector('.main');

const render = (data, likesList) => {
  main.innerHTML = '';
  data.slice(3, 9).forEach((el) => {
    likesList.forEach((like) => {
      if (like.item_id === el.idMeal) {
        el.likes = like.likes;
      }
    });
    main.innerHTML += (
      `<div class="card" id="${el.idMeal}">
<img src="${el.strMealThumb}" alt="" class="card__img" />
<div class="card__top">
<p class="card__top--name">${el.strMeal}</p>
<div class="card__top--like"><i class="fa-regular fa-heart" id='like'></i> ${el.likes || ''} likes</div>
</div>
<div class="card__bottom">
<a href="" class="btn">Comment</a>
<a href="" class="btn">Resevation</a>
</div>
</div>`);
  });
};
export default render;