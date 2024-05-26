document.addEventListener('DOMContentLoaded', () => {
    const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

    tooltips.forEach((tooltip) => {
        let tooltipItem = null;
        tooltip.addEventListener('click', (e) => {
            e.preventDefault();
            if (!tooltipItem) {
                const position = tooltip.getBoundingClientRect();
                tooltip.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: ${parseInt(position.left)}px;">${tooltip.getAttribute('title')}</div>`);
                tooltipItem = tooltip.nextElementSibling;
            }
            tooltipItem.classList.toggle('tooltip_active');
        });
    });
});
