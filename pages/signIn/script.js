const form = document.querySelector('#form');

const mainListener = function(e) {
  e.preventDefault();
  switch (e.target.name) {
    case 'submit':
      createUser(e, form);
      break;

    default:
      break;
  }
};

const loginUser = async function(e, form) {
  e.preventDefault();
  const userLogin = form.elements['login'].value;
  const userPassword = form.elements['password'].value;
  const response = await fetch('/user/login', {
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
  localStorage.setItem(defTokenName, user.accessToken);
};

form.addEventListener('click', mainListener);
