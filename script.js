// window.onload = function() {
//   // code to generate virtual keyboard goes here
// };
const textArea = document.createElement('textarea');
textArea.className = 'textarea';
document.body.append(textArea);

const keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '←'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl'],
];
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < keys[i].length; j += 1) {
    const key = document.createElement('button');
    key.classList.add('key');
    key.textContent = keys[i][j];
    if (key.textContent === ' ') {
      key.classList.add('key-space');
    }
    if (key.textContent === 'Tab' || key.textContent === 'Del') {
      key.classList.add('key-tab');
    }
    if (key.textContent === 'Caps Lock' || key.textContent === 'Enter') {
      key.classList.add('key-enter');
    }
    if (key.textContent === 'Shift') {
      key.classList.add('key-shift');
    }
    if (key.textContent === 'Ctrl' || key.textContent === 'Alt') {
      key.classList.add('key-ctrl');
    }
    row.appendChild(key);
  }

  keyboard.appendChild(row);
}

document.body.appendChild(keyboard);
