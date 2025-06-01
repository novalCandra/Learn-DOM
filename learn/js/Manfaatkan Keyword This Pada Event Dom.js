const tombol = document.querySelectorAll('button');
const heading = document.querySelectorAll('h1');


// Function Generate Color
const RandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// perulangan dengan nilai Object
for (let button of tombol) {
    button.addEventListener('click', generateBagroundColor)

}for (let judul of heading) {
    judul.addEventListener('click', generateBagroundColor)
}


function generateBagroundColor(){
    this.style.backgroundColor = RandomColor();
    this.style.color = RandomColor();
}