const hamburgerButton= document.querySelector('.hamburger');
const sideBar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const newSideBar = sideBar.cloneNode(true);
newSideBar.classList.add('new-sidebar');
newSideBar.classList.remove('sidebar');
hamburgerButton.addEventListener('click', () => {
    header.after(newSideBar);
    if (newSideBar.style.display === 'grid') {
        newSideBar.style.display = 'none';
        return;
    } else {
        newSideBar.style.display = 'grid';
    }
    
});
