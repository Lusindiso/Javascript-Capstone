import postComments from './postComments.js';

const comments1 = document.querySelector('.commentContainer');
const commentHeader = document.querySelector('.comment-header');

const uname = document.querySelector('.name');
const comments = document.querySelector('.comment');
const form = document.querySelector('.form');

const formsubmit = () => {
  form.onsubmit = async (e) => {
    e.preventDefault();
    const { id } = e.target.parentElement;
    postComments(id, uname.value, comments.value);
    comments1.innerHTML += `<div>${uname.value}: ${comments.value}</div>`;
    // eslint-disable-next-line no-plusplus
    commentHeader.innerText++;
    uname.value = '';
    comments.value = '';
  };
};

export default formsubmit;