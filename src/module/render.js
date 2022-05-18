const main = document.querySelector('.main');

const render = (data) => {
  data.slice(3,9).forEach((el) => {
    main.innerHTML += (
      `<div class="card">
		<img src="${el.strMealThumb}" alt="" class="card__img" />
		<div class="card__top">
			<p class="card__top--name">${el.strMeal}</p>
			<div class="card__top--like">likes</div>
		</div>
		<div class="card__bottom">
			<a href="" class="btn">Comment</a>
			<a href="" class="btn">Resevation</a>
		</div>
	</div>`);
  });
};
export default render;