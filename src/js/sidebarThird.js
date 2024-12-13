const sidebar = document.querySelector('.sidebar-third')
const content = document.querySelector('.content')

document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar-third')) {
    sidebar.classList.toggle('active')
    content.classList.toggle('active')
  }
})
