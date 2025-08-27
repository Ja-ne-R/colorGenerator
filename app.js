const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = randomColor();
        colorContainerEl.style.backgroundColor = newColor;
    })
  
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}


const test = document.querySelector('#test');

test.addEventListener('click', function(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = randomColor();
        colorContainerEl.style.backgroundColor = newColor;
        console.log('--> ' + newColor + ' <--'); 
    })
});

