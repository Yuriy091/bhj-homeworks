let clicker = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let counter = 0;

cookie.addEventListener('click', function(counterClick) {
    counter++;
    clicker.textContent = counter;
})

