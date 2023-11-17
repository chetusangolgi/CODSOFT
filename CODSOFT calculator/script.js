let currentInput = "";
let currentOperator = "";
let currentTotal = 0;

function updateDisplay() {
    document.getElementById("display").textContent = currentInput || "0";
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !== "") {
        calculate();
    }
    currentOperator = operator;
    currentTotal = parseFloat(currentInput);
    currentInput = "";
}

function calculate() {
    if (currentOperator === "+") {
        currentTotal += parseFloat(currentInput);
    } else if (currentOperator === "-") {
        currentTotal -= parseFloat(currentInput);
    } else if (currentOperator === "*") {
        currentTotal *= parseFloat(currentInput);
    } else if (currentOperator === "/") {
        currentTotal /= parseFloat(currentInput);
    }
    currentInput = currentTotal.toString();
    currentOperator = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    currentTotal = 0;
    updateDisplay();
}

updateDisplay();