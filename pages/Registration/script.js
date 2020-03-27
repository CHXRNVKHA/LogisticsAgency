const form = document.querySelector('#form');

const mainListener = function(e) {
    event.preventDefault();
    console.log(e.target);
};

form.addEventListener('click', mainListener);
