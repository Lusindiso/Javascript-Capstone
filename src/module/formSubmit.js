import postComments from './postComments.js';

const uname = document.querySelector('.name');
const comments = document.querySelector('.comment');
const form = document.querySelector('.form');

const formsubmit = () => {
  form.onsubmit = (e) => {
    e.preventDefault();

    const id = e.target.parentElement;
    postComments(id, uname.value, comments.value);
    uname.value = '';
    comments.value = '';
  };
};

export default formsubmit;