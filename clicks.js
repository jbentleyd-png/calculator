/* DOM all buttons*/
const b1 = document.querySelector("#one");
const b2 = document.querySelector("#two");
const b3 = document.querySelector("#three");
const b4 = document.querySelector("#four");
const b5 = document.querySelector("#five");
const b6 = document.querySelector("#six");
const b7 = document.querySelector("#seven");
const b8 = document.querySelector("#eight");
const b9 = document.querySelector("#nine");
const b0 = document.querySelector("#zero");
const bDecimal = document.querySelector("#decimal");

const bPlus = document.querySelector("#plus");
const bMinus = document.querySelector("#minus");
const bMultiply = document.querySelector("#multiply");
const bDivide = document.querySelector("#divide");

const bClear = document.querySelector("#clear");
const bEqual = document.querySelector("#equal");
const bToKanji = document.querySelector("#toKanji");

const display = document.querySelector(".display");
const title = document.querySelector("#title");

/*Number buttons also have number values associated and clickability*/
const numberButtons = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9];
numberButtons.forEach((nb, i) => {
  nb.value = i;
  nb.addEventListener("click", numberPress);
});
bDecimal.value = "."; //careful with this one
bDecimal.addEventListener("click", numberPress);

/* store numbers-in-progress in arrays */
let lastResult;
let operator;
let inputNum = [];

/* track status of inputs */
let isFloat = false;
let equalPressed = false;
let lastOperator = "";

/*inputting stuff */
function numberPress(buttonObject) {
  if (equalPressed == true) {
    clearAll();
    equalPressed = false;
  }
  if (buttonObject.target == bDecimal && isFloat == false) {
    isFloat = !isFloat;
  } else if (buttonObject.target == bDecimal && isFloat == true) {
    return; //prevents double decimal
  }
  let nextDigit = buttonObject.target.value;
  inputNum.push(nextDigit);
  console.log(inputNum);
  console.log(renderNumber(inputNum));
  display.textContent = renderNumber(inputNum);
  //seems to have a max number of digits it can write to the display. JS limitation I guess. Lucky.
}

function renderNumber(numArray) {
  if (
    numArray.length == 0 &&
    (lastOperator == "multiply" || lastOperator == "divide")
  ) {
    //aka you hit "//"" or "xx"
    return 1; //now you divide by 1 or multiply by 1, preventing change
  }
  return Number(numArray.join(""));
}

bClear.addEventListener("click", clearAll);
function clearAll() {
  lastResult = 0;
  inputNum = [];
  isFloat = false;
  lastOperator = "";
  display.textContent = renderNumber(inputNum);
}

/*Operating*/

bPlus.addEventListener("click", doMath);
bMinus.addEventListener("click", doMath);
bMultiply.addEventListener("click", doMath);
bDivide.addEventListener("click", doMath);
bEqual.addEventListener("click", doMath);

function doMath(e) {
  if (e.target.id == "equal") {
    if (lastResult == 0) {
      return; //prevents inputting and hitting = from runing stuff
    }
    if (lastOperator == "equal") {
      return; //prevents double hitting = from bugging
    }
    lastResult = operate(lastResult, lastOperator, renderNumber(inputNum));
    console.log("last result w e = " + lastResult);
    lastOperator = e.target.id;
    console.log(lastOperator);
    inputNum = [];
    console.log(inputNum);
    display.textContent = lastResult;
    equalPressed = true;
  } else if (lastOperator == "equal") {
    display.textContent = lastResult;
    lastOperator = e.target.id;
    equalPressed = false;
  } else if (lastOperator == "") {
    lastOperator = e.target.id;
    console.log(lastOperator);
    lastResult = renderNumber(inputNum);
    inputNum = [];
    display.textContent = lastResult;
  } else {
    lastResult = operate(lastResult, lastOperator, renderNumber(inputNum));
    lastOperator = e.target.id;
    console.log(lastOperator);
    inputNum = [];
    console.log(inputNum);
    display.textContent = lastResult;
  }
}
