const score1 = document.querySelector('#score-P1');
const score2 = document.querySelector('#score-P2');
const button_score1 = document.querySelector('#button-P1');
const button_score2 = document.querySelector('#button-P2');

const resets = document.querySelector('#reset');

const wintsPoints = document.querySelector('#winPoints');


// let angka = 0;

let angkaP1 = 0;
let angkaP2 = 0;

let WinnerGames = parseInt(wintsPoints.value);
let statusGame = false;

// functio  untuk meresett score
function reset_nilai() {
    statusGame = false;

    angkaP1 = 0;
    angkaP2 = 0;

    score1.textContent = 0;
    score2.textContent = 0;
}

button_score1.addEventListener('click', function () {
    if (!statusGame) {
        angkaP1 += 1;
        if (angkaP1 >= WinnerGames) {
            statusGame = true;
        }
        score1.textContent = angkaP1;
    }
});


button_score2.addEventListener('click', function () {
    if (!statusGame) {
        angkaP2 += 1;
        if (angkaP2 >= WinnerGames) {
            statusGame = true;
        }
        score2.textContent = angkaP2;
    }
})

resets.addEventListener('click', reset_nilai)

// // wints Points
wintsPoints.addEventListener('change', (event) => {  // ubah click menjadi change untuk check perubahan.
    WinnerGames= parseInt(event.target.value) // jangan pakek this
    reset_nilai();
})