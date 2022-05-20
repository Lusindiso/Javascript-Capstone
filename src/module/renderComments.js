const comments = document.querySelector('.commentContainer');
const renderComments = (list) => {
  comments.innerHTML = '';
  list.forEach((el) => {
    comments.innerHTML += `
    <div>${el.username}: ${el.comment}</div>
       `;
  });
};
export default renderComments;