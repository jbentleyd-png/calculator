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

/*Number buttons also have number values associated and clickability*/
const numberButtons = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9];
numberButtons.forEach((nb, i) => {
  nb.value = i;
  nb.addEventListener("click", numberPress);
});
bDecimal.value = "."; //careful with this one
bDecimal.addEventListener("click", numberPress);

/* store numbers-in-progress in arrays */
let num1 = [];
let num2 = [];
let operator;

function numberPress(buttonObject) {
  let nextDigit = buttonObject.target.value;
  num1.push(nextDigit);
  console.log(num1);
  console.log(renderNumber(num1));
  display.textContent = renderNumber(num1);
  //seems to have a max number of digits it can write to the display. why?
}

function renderNumber(numArray) {
  return Number(numArray.join(""));
  //pretty good, we're running into the two decimal error here....
}

/* Nothing Special*/
const title = document.querySelector("#title");
const customizableFeatures = [
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b0,
  bDecimal,
  bPlus,
  bMinus,
  bMultiply,
  bDivide,
  bClear,
  bEqual,
  bToKanji,
  title,
];
const originalLabels = customizableFeatures.map(
  (feature) => feature.textContent,
);
const kanjiLabels = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "〇",
  "点",
  "足",
  "引",
  "掛",
  "割",
  "全消",
  "等",
  "英",
  "計算機",
];

let isKanjiMode = false;

bToKanji.addEventListener("click", fortuneCookieTransformation);

// as a function declaration, can be after the event listener (hoisting stuff)
function fortuneCookieTransformation() {
  isKanjiMode = !isKanjiMode; //flip the mode
  const labels = isKanjiMode ? kanjiLabels : originalLabels; //use ternary to choose which array
  customizableFeatures.forEach(
    (feature, i) => (feature.textContent = labels[i]), //(fungibleItemName, sharedKey)
  );
}
