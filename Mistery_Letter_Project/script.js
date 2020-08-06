const contador = document.querySelector('#carta-contador');
const letter = document.querySelector('#carta-gerada');
const letterText = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const array1 = ['newspaper', 'magazine1', 'magazine2'];
const array2 = ['medium', 'big', 'reallybig'];
const array3 = ['rotateleft', 'rotateright'];
const array4 = ['skewleft', 'skewright'];

function styleChoice() {
  var concat = [];
  let arrayChoice2 = 0;
  for (let i = 0; i < 2; i += 1) {
    let arrayChoice = `array${Math.floor(Math.random() * 4) + 1}`;
    while (arrayChoice != arrayChoice2) {
      if (arrayChoice === 'array1' || arrayChoice === 'array2'){
        var style = Math.floor(Math.random() * 3);
      } else {
        var style = Math.floor(Math.random() * 2);
      }
      concat.push(arrayChoice + '[' + style + ']');
      arrayChoice2 = arrayChoice;
    }
    }  
    return concat;
  }
  button.addEventListener('click', function () {
    let arrayStrings = letterText.value.split(' ');
    if (letterText.value.length === 0 || letterText.value.trim() === '') {
      letter.innerHTML = ('por favor, digite o conteúdo da carta.');
    } else {
      while (letter.firstChild) {
        letter.removeChild(letter.firstChild);
      }
      for (let i = 0; i < arrayStrings.length; i += 1) {
        const span = document.createElement('span');
        span.innerHTML = arrayStrings[i];
        span.classList.add(eval(styleChoice()[0]));
        span.classList.add(eval(styleChoice()[1]));        
        letter.appendChild(span);
      }
  }
  contador.innerHTML = arrayStrings.length;
});
