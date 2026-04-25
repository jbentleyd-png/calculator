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
