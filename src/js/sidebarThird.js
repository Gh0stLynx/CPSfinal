const sidebarThird = document.querySelector('.sidebar-third')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')

document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar-third')) {
    sidebarThird.classList.toggle('active')
    sidebar.classList.toggle('blur')
    content.classList.toggle('active')
    content.classList.toggle('blur')
  }
})
