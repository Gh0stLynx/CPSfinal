const sidebar = document.querySelector('.sidebar-second');
const content = document.querySelector('.content');

document.addEventListener('click', (e) => {
    if (e.target.closest('.toggle-sidebar-second')) {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    }
});

