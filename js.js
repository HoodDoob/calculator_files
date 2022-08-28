setting_up();

let result;
let checkBox, operator, secondNumber, firstNumber, roundUpValue;
const resultList = document.querySelector("#results");

function setting_up() {
  console.log("we're set up");
  document.querySelector("#calculate").addEventListener("click", getValues);
  document.querySelector("#clear").addEventListener("click", clearList);
  document.querySelector("#results").scrollTo(0, 9999999);
}

function getValues() {
  checkBox = document.querySelector("#doround").checked;
  operator = document.querySelector("#operator").value;
  secondNumber = document.querySelector("#secondnumber").value;
  firstNumber = document.querySelector("#firstnumber").value;
  console.log("the first number is " + firstNumber);
  console.log("the second number is " + secondNumber);
  console.log("the status of the checkbox is " + checkBox);
  console.log("the operator is " + operator);
  calculate();
}

function calculate() {
  console.log("we're about to calculate");
  if (operator == "add") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator == "sub") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (operator == "mul") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator == "div") {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  showResult();
}

function showResult() {
  if (checkBox == true) {
    roundUpValue = document.querySelector("#decimals").value;
    result = result.toFixed(roundUpValue);
  }
  console.log("we're showing the result");
  document.querySelector("#firstnumber").value = result;
  appendNumber();
  function appendNumber() {
    let li = document.createElement("li");
    li.textContent = result;
    resultList.append(li);
  }
}
// i took this snippet from Fryderyk (https://relcnob.github.io/worlds_worst_calculator/)
function clearList() {
  resultList.innerHTML = "";
}
// end of stolen snippet
