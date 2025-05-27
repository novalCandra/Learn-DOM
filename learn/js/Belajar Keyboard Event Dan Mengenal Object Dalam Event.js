document.querySelector("button").addEventListener("click", (event) => {
    console.log(event);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
    // console.log(event);
    // console.log(event.key);
    // console.log(event.code);
    // Memakai Kondisi switch case
    switch (event.code) {
        case "ArrowUp":
            console.log("Tombol Arah Atas");
            break;
        case "ArrowDown":
            console.log("Tombol Arah Bawah");
            break;
        case "ArrowRight":
            console.log("Tombol Arah Kanan");
            break;
        case "ArrowLeft":
            console.log("Tombol Arah Kiri");
            break;
    }
});

// Fungsi keydown akan jika ditekan maka, akan mengeluarkan event handler nya
// atau aksi nya

// input.addEventListener('keyup', () => {
//     console.log('Tombol di lepas');
// }); // fungsu keyup jika di lepas tombol nya maka akan mengeluarkan event hander nya
// atau aksi nya.
