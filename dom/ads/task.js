document.addEventListener('DOMContentLoaded', () => {
    const rotator = new Rotator(document.querySelector('.rotator'));

    rotator.run();
});

class Rotator {
    constructor(container) {
        this.container = container;
        this.cases = Array.from(this.container.querySelectorAll('.rotator__case'));
        this.casesLength = this.cases.length;
        this.selectedCaseIndex = 0;
        this.timeout = null;
    }

    run() {
        const { speed, color } = this.getCaseShowParams();
        this.timeout = setTimeout(() => {
            this.unselectCase();
            this.setNextCase();
            this.selectCase(color);
            this.run();
        }, speed);
    }

    getSelecteditem() {
        return this.cases[this.selectedCaseIndex];
    }

    selectCase(color) {
        const item = this.getSelecteditem();
        item.classList.add('rotator__case_active');
        item.style.color = color;
    }

    unselectCase() {
        const item = this.getSelecteditem();
        item.classList.remove('rotator__case_active');
    }

    setNextCase() {
        this.selectedCaseIndex = (this.selectedCaseIndex + 1 + this.casesLength) % this.casesLength;
    }

    getCaseShowParams() {
        const item = this.getSelecteditem();
        return {
            speed: parseInt(item.dataset.speed),
            color: item.dataset.color,
        };
    }
}
