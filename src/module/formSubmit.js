import postComments from './postComments.js';
import getComments from './getComments.js';
import renderComments from './renderComments.js';
const comments1 = document.querySelector('.commentContainer');

const uname = document.querySelector('.name');
const comments = document.querySelector('.comment');
const form = document.querySelector('.form');

const formsubmit = () => {
    form.onsubmit = async(e) => {
        e.preventDefault();
        const id = e.target.parentElement.id;
        postComments(id, uname.value, comments.value);
        comments1.innerHTML += `<div>${uname.value}: ${comments.value}</div>`;
        uname.value = '';
        comments.value = '';


    };
};

export default formsubmit;