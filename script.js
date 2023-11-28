const buttons = document.querySelectorAll('.button-data');
const display = document.querySelector('.display');
const button_del = document.querySelector('.button-del');
const button_ac = document.querySelector('.button-ac');
const button_equal = document.querySelector('.button-equal');

let currentInput = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'x') {
      currentInput += '*';
      display.textContent = currentInput;
    }else {
      currentInput += button.textContent;
      display.textContent = currentInput;
    }
  });
});
button_del.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
});
button_ac.addEventListener('click', () => {
    currentInput = '';
    display.textContent = currentInput; 
});

button_equal.addEventListener('click', () => {
    currentInput = eval(currentInput);
    display.textContent = currentInput;
});