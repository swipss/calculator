
const KEYS = ['C', '+/-', '%', '<', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2',
'3', '+', '0', '.', '/', '=']

const buttonContainer = document.querySelector('.buttons-container')

KEYS.forEach(key => {
    const button = document.createElement('div')
    button.classList.add('button')
    button.textContent = key
    buttonContainer.append(button)

    button.addEventListener('click', (e) => {
        const numberContainer = document.querySelector('.number-container')
        numberContainer.textContent += key

        if (key === 'C') {
            numberContainer.textContent = ''
        }
        
    })

})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
    // add error on dividing with 0
}

function operate(operator, num1, num2) {
    if (operator === '+'){
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}