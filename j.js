const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (lastResult, op, inputNum) {
  if (op == "plus") {
    return add(lastResult, inputNum);
  } else if (op == "minus") {
    return subtract(lastResult, inputNum);
  } else if (op == "multiply") {
    return multiply(lastResult, inputNum);
  } else if (op == "divide") {
    return divide(lastResult, inputNum);
  }
};
