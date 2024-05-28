document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const items = document.getElementById('items');

    const xhr = new XMLHttpRequest();

    xhr.open('get', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

    xhr.onreadystatechange=function() {
        if(xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.responseText);

            renderData(Object.values(data.response.Valute));
            hideLoader();
        }
    };

    xhr.send();

    function renderData(valutes) {
        let markup = valutes.reduce((prev, valute) => {
            return prev + createMakrup(valute);
        }, '');
        
        items.innerHTML = markup;
    }

    function createMakrup(valute) {
        return `
        <div class="item">
            <div class="item__code">
                ${valute.CharCode}
            </div>
            <div class="item__value">
                ${valute.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `;
    }

    function hideLoader() {
        loader.classList.remove('loader_active');
    }
});
