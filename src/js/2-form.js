'use strict';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if((savedData !== null) && (savedData.userEmail !== undefined, savedData.userMessage !== undefined)) {
  form.elements.email.value = savedData.userEmail;
  form.elements.message.value = savedData.userMessage
}

form.addEventListener('input', saveValueToLS);

function saveValueToLS(evt) {
  const email = (form.elements.email.value).trim();
  const message = (form.elements.message.value).trim();

  const userData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', removeValueFromLS);

function removeValueFromLS(evt) {
  evt.preventDefault();

  const email = (form.elements.email.value).trim();
  const message = (form.elements.message.value).trim();

  if(email === '' || message === '') {alert('all fields must be full'); return};

  const parsedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedValue);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}



