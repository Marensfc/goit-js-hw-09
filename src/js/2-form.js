'use strict';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.elements.email.value = savedData === null ? '' : savedData.userEmail;
form.elements.message.value = savedData === null ? '' : savedData.userMessage;

form.addEventListener('input', saveValueToLS);

function saveValueToLS(evt) {
  const userData = {
    userEmail: form.elements.email.value,
    userMessage: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', removeValueFromLS);

function removeValueFromLS(evt) {
  evt.preventDefault();

  const parsedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedValue);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}
