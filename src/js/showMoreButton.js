export const myVariable = 'CPSfinal'

const switchButton = document.querySelector('.switch-button')
const logos = document.querySelector('.slides')
const logosLinks = logos.querySelectorAll('.slides__link')

switchButton.addEventListener('click', function () {
  logos.classList.toggle('slides_cut')

  switchButton.textContent = logos.classList.contains('slides_cut')
    ? 'Показать все'
    : 'Скрыть'

  switchButton.classList.toggle('switch-button_active')
})
