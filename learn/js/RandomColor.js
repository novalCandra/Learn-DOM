const button = document.querySelector('#generate');
const h1 = document.querySelector('#generate_color');

button.addEventListener('click', () =>{
    const generateColor = generateRandomColor()
    console.log(generateColor);

    document.body.style.backgroundColor = `${generateColor}`;
    h1.innerHTML = generateColor;
})

// Membuat Generate Color dengan Operasi Matematika

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}