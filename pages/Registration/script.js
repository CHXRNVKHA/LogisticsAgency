const form = document.querySelector('#form');

const mainListener = function(e) {
  event.preventDefault();
  switch (e.target.name) {
    case 'submit':
      break;

    default:
      break;
  }
};

const createUser = async function(e) {
  event.preventDefault();
  const userName = this.elements['name'].value;
  const userSurname = this.elements['surname'].value;
  const userLogin = this.elements['login'].value;
  const userPassword = this.elements['password'].value;
  const response = await fetch('/user/add', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      name: userName,
      surname: userSurname,
      login: userLogin,
      password: userPassword,
    })
  });
  const user = await response.json();
};

form.addEventListener('click', mainListener);
