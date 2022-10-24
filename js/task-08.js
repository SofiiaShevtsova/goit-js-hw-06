const formUser = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Заповніть всі поля форми!");
  }

  const formData = new FormData(event.currentTarget);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
  });
  console.log(user);

  formUser.reset();
};

formUser.addEventListener("submit", onFormSubmit);
