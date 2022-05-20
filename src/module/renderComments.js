const comments = document.querySelector('.commentContainer');
const renderComments = (list) => {
  comments.innerHTML = '';
  list.forEach((el) => {
    comments.innerHTML += `
    <div class="comment-item"><span class='user'>${el.username}</span>: <span>${el.comment}</span></div>
       `;
  });
};
export default renderComments;