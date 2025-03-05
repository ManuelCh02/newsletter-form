const emailForm = document.querySelector('.main__info-form__form');
const emailInput = document.querySelector('.email');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = emailInput.value

    if(!emailIsValid(email) || !email.trim()) {
        emailInvalidStyles()
        return
    } else {
        formFullfiledSucces(email)
        return
    }
})

function emailIsValid(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}

function emailInvalidStyles() {
    const labelContainer = document.querySelector('.main__info-form__label-container')
    const spanElement = document.createElement('span')
    spanElement.innerHTML = `Valid email required`
    spanElement.classList.add('emailInvalidMessage')

    labelContainer.append(spanElement)
    emailInput.classList.add('emailInvalid')
}

function formFullfiledSucces(email) {
    localStorage.setItem('userEmail', email)
    window.location.href = 'mobile-form-success.html'
}