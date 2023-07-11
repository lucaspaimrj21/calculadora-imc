// variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

// 3 maneiras de criar e atribuir função a um evento

// form.onsubmit = () => {}

// form.onsubmit = handleSubmit
// function handleSubmit() {}

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => modalWrapper.classList.remove('open')



function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

