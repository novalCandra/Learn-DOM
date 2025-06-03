// menghapus list dengan kita amil parents li
// agar bisa menghapus sebuah list berdasarkan parent nya.

const from = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#list');
const list_kosong = '';
const li_array = [];

// mengammbil Object li
const li = document.querySelectorAll('li');

// for (let lis of li) {
//     lis.addEventListener('click', (e) => {
//         console.log(e)
//     })
// };


from.addEventListener('submit', function (event) {
    event.preventDefault();
    const input_values = input.value;
    const elemenentBaru = document.createElement('li');

    if (input_values === list_kosong) {
        console.log('Inputan Kosong')
        from.addEventListener('change', () => {
            elemenentBaru.innerHTML = '';
        })

        return '';
    } else if ([...list.children].some(item => item.innerText ==  input_values)){ // kode ES6
        console.log('Ada Nilai Duplicated')
        from.addEventListener('change', () => {
            elemenentBaru.innerHTML = '';
        })
        return '';
    } else {
        elemenentBaru.innerText = input_values;
        list.append(elemenentBaru);
        // cara hapus history dengan cara '';
        input.value = '';
    };

    // [X] Check Video lagi untuk kepaaman
    // [X] masalah nya. harus kondisi if dan else
    // [X]  menanyakan bagian [...list.children].some(item => item.innerText ==  input_values))
})


// saat di tekan maka akan di hapus element nya
list.addEventListener('click', (e) => {
    e.target.tagname == 'LI' && e.target.remove();
    console.dir(e.target);
});