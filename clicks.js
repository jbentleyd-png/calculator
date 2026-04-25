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

const title = document.querySelector("#title");

const fortuneCookieTransformation = function () {
  b1.textContent = "一";
  b2.textContent = "二";
  b3.textContent = "三";
  b4.textContent = "四";
  b5.textContent = "五";
  b6.textContent = "六";
  b7.textContent = "七";
  b8.textContent = "八";
  b9.textContent = "九";
  b0.textContent = "〇";
  bDecimal.textContent = "点";

  bPlus.textContent = "足";
  bMinus.textContent = "引";
  bMultiply.textContent = "掛";
  bDivide.textContent = "割";

  bClear.textContent = "全消";
  bEqual.textContent = "等";
  bToKanji.textContent = "英";

  title.textContent = "計算機";
};

bToKanji.addEventListener("click", fortuneCookieTransformation);
