const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const currentUsername = localStorage.getItem(USERNAME_KEY);

if (!localStorage.getItem(USERNAME_KEY)) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(currentUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
