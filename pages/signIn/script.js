const form = document.querySelector('#form');

const defTokenName = 'userToken';

const mainListener = function(e) {
  e.preventDefault();
  switch (e.target.name) {
    case 'submit':
      loginUser(e, form);
      break;
    case 'SignUp':
      loadSignUpPage(e, form);
      break;

    default:
      break;
  }
};

const loadSignUpPage = async function (e, form) {
  e.preventDefault();
  const response = await fetch ('/registry', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  location = 'http://127.0.0.1:3000/registry/';
}

const loginUser = async function(e, form) {
  e.preventDefault();
  const userLogin = form.elements['login'].value;
  const userPassword = form.elements['password'].value;
  let response = await fetch('/user/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      login: userLogin,
      password: userPassword,
    })
  });
  const user = await response.json();
  localStorage.setItem(defTokenName, user.token);
  response = await fetch ('pages/main', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-access-token': user.token,
    },
  });
};

form.addEventListener('click', mainListener);
