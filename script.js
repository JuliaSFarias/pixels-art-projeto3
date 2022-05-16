const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const button = document.getElementById('clear-board');

function selectColor(event) {
    for (const color of colors) {
        if(color.classList.contains('selected')){
            color.classList.remove('selected');
        }
    }

    event.target.classList.add('selected');
}

function applyColor(event) {
    const selectedColor = document.querySelector('.selected');

    event.target.id = selectedColor.id;

}

function clearBoard() {
    for (const pixel of pixels) {
        pixel.id = '';
    }
}

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', selectColor);
}

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', applyColor);
}

button.addEventListener('click', clearBoard);
