document.addEventListener('DOMContentLoaded', () => {
    const reveals = Array.from(document.querySelectorAll('.reveal'));

    document.addEventListener('scroll', () => {
        reveals.forEach((reveal) => {
            if (!isInViewport(reveal)) {
                return;
            }

            reveal.classList.add('reveal_active');
        })
    });

    function isInViewport(element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        return elementTop < viewportHeight;
    }
});
