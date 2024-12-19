export const myVariable = 'CPSfinal'

const switchButton = document.querySelector('.switch-button')
const slides = document.querySelector('.slides')
const slidesLinks = slides.querySelectorAll('.slides__link')

switchButton.addEventListener('click', function () {
  slides.classList.toggle('slides_cut')

  switchButton.textContent = slides.classList.contains('slides_cut')
    ? 'Показать все'
    : 'Скрыть'

  switchButton.classList.toggle('switch-button_active')
})
