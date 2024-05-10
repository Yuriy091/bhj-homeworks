document.addEventListener('DOMContentLoaded', () => {
    const tabs = new Tabs(document.getElementById('tabs1'));
    tabs.init();
});

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = Array.from(this.container.querySelectorAll('.tab'));
        this.contents = Array.from(this.container.querySelectorAll('.tab__content'));
        this.selectedTabIndex = 0;
    }

    init() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                this.unselectTab(this.findTabByIndex(this.selectedTabIndex));
                this.selectedTabIndex = index;
                this.selectTab(this.findTabByIndex(index));
            });
        });
    }

    selectTab({ tab, content }) {
        tab.classList.add('tab_active');
        content.classList.add('tab__content_active');
    }

    unselectTab({ tab, content }) {
        tab.classList.remove('tab_active');
        content.classList.remove('tab__content_active');
    }

    findTabByIndex(index) {
        return {
            tab: this.tabs[index],
            content: this.contents[index],
        }
    }
}
