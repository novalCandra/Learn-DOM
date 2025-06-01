// Mengmbail Object HTML nya
const form  = document.querySelector('#form')
const input = document.querySelector('input');
const list = document.querySelector('#node')

// input.addEventListener('change', (e) => {
//     console.log('Nilai berubah')
// })

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newValue = input.value;
    console.log(newValue);
})

// okeh masih belum selesai akan saya kerjakan kembali habis pulang sekolah