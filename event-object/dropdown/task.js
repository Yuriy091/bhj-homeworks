document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.dropdown__list');
    const valueView = document.querySelector('.dropdown__value');
// 
    valueView.addEventListener('click', openDropdown);

    const links = Array.from(list.querySelectorAll('.dropdown__link'));

    links.forEach((link) => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
            hideDropdown();
            valueView.textContent = link.textContent;
       });
    });

    function openDropdown() {
        list.classList.add('dropdown__list_active');
    }

    function hideDropdown() {
        list.classList.remove('dropdown__list_active');
    }
});
