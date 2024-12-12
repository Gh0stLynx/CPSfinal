/*const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
const toggleButton = document.querySelector('.toggle-sidebar')

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active')
  content.classList.toggle('active')
}) */

const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')

document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar')) {
    sidebar.classList.toggle('active')
    content.classList.toggle('active')
  }
})
