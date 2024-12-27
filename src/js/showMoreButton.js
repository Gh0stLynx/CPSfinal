const switchButtons = document.querySelectorAll('.switch-button')
const slidesList = document.querySelectorAll('.slides')

switchButtons.forEach((switchButton, index) => {
  switchButton.addEventListener('click', function () {
    slidesList[index].classList.toggle('slides_cut')

    switchButton.textContent = slidesList[index].classList.contains(
      'slides_cut'
    )
      ? 'Показать все'
      : 'Скрыть'

    switchButton.classList.toggle('switch-button_active')
  })
})
