const sidebarSecond = document.querySelector('.sidebar-second')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')

document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar-second')) {
    sidebarSecond.classList.toggle('active')
    sidebar.classList.toggle('blur')
    content.classList.toggle('active')
    content.classList.toggle('blur')
  }
})
