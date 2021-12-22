const formControl = document.querySelectorAll('.form-control');
const button = document.querySelector('form button');

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

button.addEventListener('click', (e) => {
  e.preventDefault();

  formControl.forEach((item) => {
    const input = item.querySelector('input');

    if (input.value.length === 0) {
      item.classList.add('error');
    } else {
      item.classList.remove('error');

      if (input.name === 'email') {
        const isValid = validateEmail(input.value);

        if (isValid) {
          item.classList.remove('error');
        } else {
          item.classList.add('error');
        }
      }
    }
  });
});
