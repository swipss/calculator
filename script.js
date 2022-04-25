
const KEYS = ['C', '+/-', '%', '<', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2,
3, '+', 0, '.', '/', '=']

const buttonContainer = document.querySelector('.buttons-container')

let displayValue = ''
let lastValue = ''
let operator = ''


function populate() {
    KEYS.forEach(key => {
        const button = document.createElement('div')
        button.classList.add('button')
        button.textContent = key
        buttonContainer.append(button)

    
        button.addEventListener('click', (e) => {
            const numberContainer = document.querySelector('.number-container')
            if (key === Number(key)) {
                numberContainer.textContent = displayValue

                numberContainer.textContent += key
                displayValue += key
            }
            if (key === '+') {
                numberContainer.textContent = displayValue
                operator = '+'
                lastValue = displayValue
                displayValue = ''
                console.log(lastValue)
                console.log('plus clicked')

            }

            if (key === '=') {
                let answer = operate(operator, Number(lastValue), Number(displayValue))
                console.log(answer)
                numberContainer.textContent = answer
                displayValue = answer
                operator = ''
            }

            if (key === 'C') {
                numberContainer.textContent = ''
                displayValue = ''
                lastValue = ''
                operator = ''
            }
            

        })
    
    })
}


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

populate()