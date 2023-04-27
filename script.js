// window.onload = function() {
//   // code to generate virtual keyboard goes here
// };

const keys = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', "'\\", 'Backspace']
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];
var keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

for (var i = 0; i < keys.length; i++) {
  var row = document.createElement('div');
  row.classList.add('row');

  for (var j = 0; j < keys[i].length; j++) {
    var key = document.createElement('button');
    key.classList.add('key');
    key.textContent = keys[i][j];
    row.appendChild(key);
  }

  keyboard.appendChild(row);
}

document.body.appendChild(keyboard);