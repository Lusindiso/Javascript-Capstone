export const main = document.querySelector('.main');

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
<div class="card__top--like"><i class="fa-regular fa-heart" id='like'></i><p> ${el.likes || ''} </p>likes</div>
</div>
<div class="card__bottom">
<a href="" id="comments" class="btn">Comment</a>
<a href="" id="reservations" class="btn">Resevation</a>
</div>
</div>`);
  });
};
export default render;