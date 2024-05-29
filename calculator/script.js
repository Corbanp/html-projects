let result = document.getElementById('result');
let clear = document.getElementById('clear');
let recall = '';

const fixNumber = num => Number(num.toPrecision(15));

function appendValue(val) {
  if (val !== '.' || (val === '.' && !result.value.includes('.'))) {
    result.value += val;
    clear.innerText = 'C';
  }
}

function clearResult() {
  if (clear.innerText === 'AC') {
    recall = '';
  } else {
    result.value = '';
    clear.innerText = 'AC';
  }
}

function changeSign() {
  if (result.value.includes('-')) {
    result.value = result.value.replace(/-/g, '');
  } else if (result.value !== '0') {
    result.value = '-' + result.value;
  }
}

function percent() {
  result.value = fixNumber(result.value * 0.01);
}

function operate(operator) {
  let expression = result.value;
  if (expression) {
    result.value = fixNumber(eval(expression));
    appendValue(operator);
  }
}

function calculate() {
  let expression = result.value;
  if (expression) {
    result.value = fixNumber(eval(expression));
  }
}
