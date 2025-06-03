const skorP1 = document.querySelector('#p1-display');
const skorP2 = document.querySelector('#p2-display');

const buttonP1 = document.querySelector('#p1');
const buttonP2 = document.querySelector('#p2');
const buttonReset = document.querySelector('#reset')

let winPOints = document.querySelector("#winPoints");


//  menentukan nilai pada setiap user
let scoreP1 = 0;
let scoreP2 = 0;

let winnerGame = 3;
let gameOver = false;



// membuat function untuk mereset score user one and user two
function reset(a) {
    gameOver = false
    scoreP1 = 0;
    scoreP2 = 0;

     skorP1.textContent = 0;
     skorP2.textContent = 0;
}

buttonP1.addEventListener('click', function () {

    if (!gameOver) {
        scoreP1 += 1;
        if (scoreP1 >= winnerGame) {
            alert('Selamat P1 Winner');
            gameOver = true;
        }
        skorP1.textContent = scoreP1;
    }
});


buttonP2.addEventListener('click', function () {

    if (!gameOver) {
        scoreP2 += 1;
        if (scoreP2 >= winnerGame) {
            alert('Selamat P2 Winner');
            gameOver = true;
        }
        skorP2.textContent = scoreP2;
    }
})


// button reset
buttonReset.addEventListener('click', reset);

// menentukan skors tanpa hat code
winPOints.addEventListener('change', function(){
    // winPoinst akan di sesuaikan dengan value yang di dapatkan
    winPOints = parseInt(this.value); // this untuk mengambil nilai values nya
    reset(); // mereset jika  pergantian values 
})