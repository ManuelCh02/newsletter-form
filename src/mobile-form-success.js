const userEmailHtmlElement = document.querySelector('.userEmailElement')
const dismissButton = document.querySelector('.main-form-success__button-container__dismiss-button')

let userEmail = localStorage.getItem('userEmail');

if(userEmail) {
    userEmailHtmlElement.textContent = userEmail;
}

dismissButton.addEventListener('click', () => {
    window.location.href = 'index.html'
})