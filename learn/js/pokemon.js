// API POKEMON
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.querySelector('#sections') // mengambil element di html berdasarkan ID
const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; // mengambil API di Pokemon API

for(let i = 1 ; i <= 500; i++){ // melakukan perulangan sampai ketentuanya.

    const div = document.createElement('div'); /// membuat Element Div untuk menyisipkan element img dan span
    div.classList.add('pokemon');

    const imgApi = document.createElement('img');
    imgApi.src = `${img}${i}.png`;

    const text = document.createElement('span');
    text.innerText = `#${i}`

    div.appendChild(imgApi); // Menambahkan Element ImgApi
    div.appendChild(text); // Menambahkan Element span
    section.appendChild(div); // menambahkan elemen div
}