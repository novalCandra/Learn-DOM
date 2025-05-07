const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');
const remove = document.querySelector('#remove');
// document.addEventListener(()=>{
//     console.log('Data Berhasil Dikirim')
// })


form.addEventListener('submit', function(e){
    e.preventDefault();
    const notevalues = input.value;
    if(notevalues == '') return;

    const newList = document.createElement('li');
    newList.innerText = notevalues;
    list.append(newList);
    input.value = '';
;})


remove.addEventListener('click', function(){
    list.innerHTML= '';
})