// script.js
let display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === "0" || display.value === "Error") display.value = number;
    else display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) return;
    display.value += operator;
}

function appendDecimal() {
    const parts = display.value.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes('.')) display.value += '.';
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    try {
        display.value = eval(display.value) || "0";
    } catch {
        display.value = "Error";
    }
}

function calculateFactorial() {
    try {
        const number = parseInt(display.value);
        if (number < 0) throw "Error";
        display.value = factorial(number);
    } catch {
        display.value = "Error";
    }
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(parseFloat(display.value));
        if (isNaN(result)) throw "Error";
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function calculateCubeRoot() {
    try {
        display.value = Math.cbrt(parseFloat(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculateLog() {
    try {
        const result = Math.log10(parseFloat(display.value));
        if (isNaN(result)) throw "Error";
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function allClear() {
    display.value = "0"; // Reset the display
}

