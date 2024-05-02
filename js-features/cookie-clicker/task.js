let clicker = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let counter = 0;
const img = document.querySelector('img')

cookie.addEventListener('click', function(counterClick) {
    counter++;
    clicker.textContent = counter;
    console.log('click');

    
})

    

    img.addEventListener('mousedown', ()=> {
        img.width = 250;
    });

    img.addEventListener('mouseup', ()=> {
        img.width = 200;
    });
   

