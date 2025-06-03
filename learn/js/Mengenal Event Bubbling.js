const container = document.querySelector('#container');
const buttons = document.querySelector('#RandomColor');


buttons.addEventListener('click', (event) => {
    container.style.backgroundColor = RandomColor();
    event.stopPropagation(); // itu sama seperti preventDefault yang dimaan akan memperhantikan proses lanjutan event atau memperhatikan sebuah event yang di miliki oleh parent
});

container.addEventListener('click', () => {
    container.classList.toggle('hide'); // toggle sama seperti swich atau kondisi
})

const RandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}