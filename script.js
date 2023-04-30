// window.onload = function() {
//   // code to generate virtual keyboard goes here
// };
const textArea = document.createElement('textarea');
textArea.className = 'textarea';

const osType = document.createElement('span');
osType.className = 'os-type';
osType.textContent = 'Created in Windows 10';

const btnChangeLang = document.createElement('button');
btnChangeLang.classList.add('key', 'key-change-lang');
btnChangeLang.textContent = 'Ru';

let english = true;

let keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '←'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl'],
];

const keysRu = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '←'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del'],
  ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'б', 'ю', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl'],
];

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const currentKeyboard = keyboard;
function createKeyboard() {
  // if (!english) {
  //   keys = keysRu;
  // }
  while (currentKeyboard.firstChild) {
    currentKeyboard.removeChild(currentKeyboard.firstChild);
  }
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
      if (key.textContent === 'Caps Lock') {
        key.addEventListener('click', () => {
          key.classList.toggle('_active');
        });
      }
      if (key.textContent === 'Shift') {
        key.classList.add('key-shift');
      }
      if (key.textContent === 'Ctrl' || key.textContent === 'Alt') {
        key.classList.add('key-ctrl');
      }
      key.addEventListener('click', () => {
        if (!key.classList.contains('key-tab') && !key.classList.contains('key-enter') && !key.classList.contains('key-shift') && !key.classList.contains('key-ctrl') && key.textContent !== ('←')) {
          textArea.value += key.textContent;
        }
      });
      row.appendChild(key);
    }

    keyboard.appendChild(row);
  }
}
createKeyboard();

const bodyAppend = (...items) => {
  items.forEach((item) => document.body.appendChild(item));
};

btnChangeLang.addEventListener('click', () => {
  document.body.removeChild(keyboard);
  english = !english;
  btnChangeLang.textContent = english ? 'Ru' : 'En';
  if (english) {
    keys = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '←'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
      ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
      ['Ctrl', 'Alt', ' ', 'Alt', 'Ctrl'],
    ];
    createKeyboard();
  } else {
    keys = keysRu;
    createKeyboard();
  }
  bodyAppend(currentKeyboard);
});

// const toggleCapsLock = () => {
//   if (key.textContent === 'Caps Lock') {
//     key.addEventListener('click', () => {
//       key.classList.toggle('_active');
//     });
//   }
// };
bodyAppend(textArea, osType, btnChangeLang, keyboard);

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const buttons = keyboard.querySelectorAll('.key');
  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === key) {
      button.classList.add('active');
    }
  });
});
window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  const buttons = keyboard.querySelectorAll('.key');
  buttons.forEach((button) => {
    if (button.textContent.toLowerCase() === key) {
      button.classList.remove('active');
    }
  });
});
