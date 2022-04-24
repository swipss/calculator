
const KEYS = ['C', '+/-', '%', '<', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2',
'3', '+', '0', '.', '/', '=']

const buttonContainer = document.querySelector('.buttons-container')

KEYS.forEach(key => {
    const button = document.createElement('div')
    button.classList.add('button')
    button.textContent = key
    buttonContainer.append(button)

    button.addEventListener('click', (e) => {
        console.log(e.target)
    })

})

