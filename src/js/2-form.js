const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function handleInput() {
  const userName = form.elements.email.value;
  const userMessage = form.elements.message.value;

  const data = {
    email: userName,
    message: userMessage,
  };

  saveToLS(STORAGE_KEY, data);
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

function handleSubmit(e) {
  e.preventDefault();

  const userName = form.elements.email.value;
  const userMessage = form.elements.message.value;

  if (userName.trim() === '' || userMessage.trim() === '') {
    alert('Please fill in both fields of the form');
    return;
  }

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);


restoreData();