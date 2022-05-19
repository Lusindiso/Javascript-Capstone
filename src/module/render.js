export const main = document.querySelector('.main');

const render = (data) => {
  data.slice(3, 9).forEach((el) => {
    main.innerHTML += (
      `<div class="card">
<img src="${el.strMealThumb}" alt="" class="card__img" />
<div class="card__top">
<p class="card__top--name">${el.strMeal}</p>
<div class="card__top--like"><i class="fa-regular fa-heart"></i> likes</div>
</div>
<div class="card__bottom">
<a href="" id="comments" class="btn">Comment</a>
<a href="" id="reservations" class="btn">Resevation</a>
</div>
</div>`);
  });
};
export default render;