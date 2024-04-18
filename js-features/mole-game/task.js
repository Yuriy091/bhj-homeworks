const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;

getHole = index => document.getElementById(`hole${index}`);// выбор дыры по index
for ( i = 1; i <= 10; i++ ) {
    let hole = getHole(i);
    
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead === 10) {
          
            alert ('Вы победили!');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        }
        if (counterLost === 10) {
            alert('Увы, проиграли!');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        }
    });

}
