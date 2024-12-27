const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')

document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar')) {
    sidebar.classList.toggle('active')
    content.classList.toggle('active')
  }
})
