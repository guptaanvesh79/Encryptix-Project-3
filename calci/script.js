let displayValue = '0';

const display = document.getElementById('display');

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue[displayValue.length - 1];
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '(' && lastChar !== ')') {
        displayValue += operator;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
