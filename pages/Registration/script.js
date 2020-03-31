const form = document.querySelector('#form');

const defUserRoleName = 'user';

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

const createUser = async function(e, form) {
  e.preventDefault();
  const userName = form.elements['name'].value;
  const userSurname = form.elements['surname'].value;
  const userLogin = form.elements['login'].value;
  const userPassword = form.elements['password'].value;
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
      role: defUserRoleName,
    })
  });
  if (response.status == 400) alert(response);
};

form.addEventListener('click', mainListener);
