const nama = prompt(`Masuk Nama`);
const menyapa = document.querySelector('#eventButton');

// menyapa.addEventListener('click', () => {
//     alert(`Hello ${nama}`);
// });

menyapa.addEventListener('click', nyapa_1)
menyapa.addEventListener('click', nyapa_2)

// Kalau pakek function biasa dan menggunakan propeties biasa maka akan nilai di replace
function nyapa_1(){
    console.log(`Heloo ${nama}`)
}
function nyapa_2(){
    console.log(`Heloo udin`)
}

// menyapa.onclick = nyapa_1;
// menyapa.onclick = nyapa_2;