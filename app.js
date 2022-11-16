const gridContainer = document.querySelector('.sketch-container')
const header = document.querySelector('h1');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
var pixel = document.querySelectorAll('.pixel')

function listenerAdd(obj, ind) {
    obj[ind].addEventListener('mouseover', () => {
        obj[ind].style.backgroundColor = 'white';
    })
}

function drawGrid(size) {

    if (size < 100) {

        gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";

        gridContainer.style.gridTemplateRows = "repeat(" + size + ", 1fr)";

        gridder = '';
        
        for (var i = 0; i < size*size; i++) {
            gridder += '<div class="pixel"></div>';
        }

        gridContainer.innerHTML = gridder;
        header.innerHTML = size + ' x ' + size + " Grid";

        pixel = document.querySelectorAll('.pixel');

        for (var i = 0; i < pixel.length; i++) {
            listenerAdd(pixel, i);    
        }
    } else {
        header.innerHTML = 'Grid size should be less than 100 * 100';
    }
}

input.style.color = "purple";


button.addEventListener('click', () => {
    console.log(input.value);
    drawGrid(input.value);
});






drawGrid(9);