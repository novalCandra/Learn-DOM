const button = document.querySelector('#clickme'); // Di dalam Event kita biusa makek segala nya tidak harus button

// Membuat Function Secara Langsung
button.onclick =  function(){
    alert(`Hello Wordl`);
};

// Menggunakan onmouseover

// Kita Bisa Membuat Function didalam variabel
const arahkan = () => {
    console.log("Hello Guys");
};

button.onmouseover = arahkan;