setting_up();

let result;
let checkBox, operator, secondNumber, firstNumber, roundUpValue;
const resultList = document.querySelector("#results");

function setting_up() {
  console.log("we're set up");
  document.querySelector("#calculate").addEventListener("click", getValues);
  document.querySelector("#clear").addEventListener("click", clearList);
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
    document.querySelector("#results").scrollTo(0, 9999999);
  }
}
// i took bit of this snippet from Fryderyk, but changed it so that it goes back to th original state and restarts the checkbox (it's better my way ;))))) (https://relcnob.github.io/worlds_worst_calculator/)
function clearList() {
  resultList.innerHTML = "<li>0</li> <li>0</li> <li>0</li> <li>0</li>";
  document.querySelector("#doround").checked = false;
  console.log("clearing");

  // document.querySelector("#results").textContent = "cock";
}
// end of stolen snippet
