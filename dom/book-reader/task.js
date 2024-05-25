document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('book');

    const fontSizeFormatter = new FontSizeFormatter({
        controls: Array.from(document.querySelectorAll('.book__control_font-size > .font-size')),
        textContainer,
    });
    fontSizeFormatter.init();

    const fontColorFormatter = new FontColorFormatter({
        controls: Array.from(document.querySelectorAll('.book__control_color > .color')),
        textContainer,
    });
    fontColorFormatter.init();

    const bgColorFormatter = new BackgroundColorFormatter({
        controls: Array.from(document.querySelectorAll('.book__control_background > .color')),
        textContainer,
    });
    bgColorFormatter.init();
});

class TextFormatter {
    constructor({ controls, textContainer }) {
        this.controls = controls;
        this.textContainer = textContainer;
        this.activClass = '';
        this.activeControl = 0;
    }

    init() {
        this.controls.forEach((control, index) => {
            if (control.classList.contains(this.activClass)) {
                this.activeControl = index;
            }

            control.addEventListener('click', (e) => {
                e.preventDefault();

                this.switchElements(index);
                this.applyControlToText(control);
            });
        });
    }

    switchElements(activateIndex) {
        const toDeactivate = this.controls[this.activeControl];
        toDeactivate.classList.remove(this.activClass);

        this.activeControl = activateIndex;

        const toActivate = this.controls[this.activeControl];
        toActivate.classList.add(this.activClass);
    }

    applyControlToText() {
        return;
    }
}

class FontSizeFormatter extends TextFormatter {
    constructor({ controls, textContainer }) {
        super({ controls, textContainer });
        this.activClass = 'font-size_active';
    }

    applyControlToText(controlElement) {
        this.textContainer.classList.remove('font-size_small');
        this.textContainer.classList.remove('font-size_big');

        if (!controlElement.dataset.size) {
            return;
        }

        const size = controlElement.dataset.size;

        this.textContainer.classList.add(`font-size_${size}`);
    }
}

class FontColorFormatter extends TextFormatter {
    constructor({ controls, textContainer }) {
        super({ controls, textContainer });
        this.activClass = 'color_active';
    }

    applyControlToText(controlElement) {
        this.textContainer.classList.remove('book_color-gray');
        this.textContainer.classList.remove('book_color-whitesmoke');
        this.textContainer.classList.remove('book_color-black');

        const textColor = controlElement.dataset.textColor;

        this.textContainer.classList.add(`book_color-${textColor}`);
    }
}

class BackgroundColorFormatter extends TextFormatter {
    constructor({ controls, textContainer }) {
        super({ controls, textContainer });
        this.activClass = 'color_active';
    }

    applyControlToText(controlElement) {
        this.textContainer.classList.remove('book_bg-gray');
        this.textContainer.classList.remove('book_bg-black');
        this.textContainer.classList.remove('book_bg-white');

        const bgColor = controlElement.dataset.bgColor;

        this.textContainer.classList.add(`book_bg-${bgColor}`);
    }
}
