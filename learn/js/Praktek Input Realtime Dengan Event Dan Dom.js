const from = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#list')

from.addEventListener('submit',function(event){
    event.preventDefault();
    const input_values = input.value;
    const elemenentBaru =  document.createElement('li');
    elemenentBaru.innerText = input_values;
    list.append(elemenentBaru);
    // cara hapus history dengan cara '';
    input.value = '';
})