const sidebar = document.querySelector('.sidebar')
const sidebarSecond = document.querySelector('.sidebar-second')
const sidebarThird = document.querySelector('.sidebar-third')
const content = document.querySelector('.content')

// Функция для закрытия модального окна и убирания затемнения
function closeSidebar(sidebarElement) {
  sidebarElement.classList.remove('active')
  content.classList.remove('blur')
}

// Обработчик события клика на документе
document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle-sidebar')) {
    sidebar.classList.toggle('active')
    content.classList.toggle('blur')
  } else if (e.target.closest('.toggle-sidebar-second')) {
    sidebarSecond.classList.toggle('active')
    content.classList.toggle('blur')
  } else if (e.target.closest('.toggle-sidebar-third')) {
    sidebarThird.classList.toggle('active')
    content.classList.toggle('blur')
  } else if (
    !e.target.closest('.sidebar') &&
    !e.target.closest('.sidebar-second') &&
    !e.target.closest('.sidebar-third')
  ) {
    closeSidebar(sidebar)
    closeSidebar(sidebarSecond)
    closeSidebar(sidebarThird)
  }
})
