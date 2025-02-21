document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navItems = document.querySelector('.nav-items');

    menuBtn.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
}); 