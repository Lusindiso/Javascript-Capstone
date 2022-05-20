const comments = document.querySelector('.commentContainer');
const renderComments = (list) => {
  comments.innerHTML = '';
  list.forEach((el) => {
    comments.innerHTML += `
    
    <div>
    
        <ul>
            <li>${el.username}: ${el.comment}</li>
        <ul>    
    </div>`;
  });
};
export default renderComments;