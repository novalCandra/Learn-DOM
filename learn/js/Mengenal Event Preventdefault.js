// Mengmbail Object HTML nya
const form  = document.querySelector('#form')
const input = document.querySelector('input');
const list = document.querySelector('#node')

// input.addEventListener('change', (e) => {
//     console.log('Nilai berubah')
// })

form.addEventListener('submit', function(e){
    e.preventDefault(); // Mencegah sesuatu action atau kebiaasaan sebuah element
    const newValue = input.value;
    console.log(newValue);
})

document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Dicegah');
})