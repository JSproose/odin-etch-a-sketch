const body = document.querySelector('body');
const div_gridContainer = document.createElement('div');
const button = document.querySelector('button');
body.appendChild(div_gridContainer);

let dimensions = 16;


function mouseHover(){
    backgroundColor = this.style.backgroundColor
    if (((parseInt(backgroundColor.slice(4, 7))/250) - 0.1)*100 < 0) return;
    const newValue = ((parseInt(backgroundColor.slice(4, 7))/250) - 0.1)*100
    this.style.backgroundColor = `rgb(${newValue}%, ${newValue}%, ${newValue}%)`
}

function removeGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.remove();
    });
}

function createGrid() {
    div_gridContainer.style.cssText = `width: 800px; height: 800px; display: inline-grid; 
    grid-template-columns: repeat(${dimensions}, 1fr); border: 50px solid #bd162c; background-color: white; border-radius: 32px;`;
    for (i = 1; i <= (dimensions*dimensions); i++) {
        const div_gridItem = document.createElement('div');
        div_gridItem.classList.add('grid-item')
        div_gridItem.style.cssText = 'height: auto; background-color: rgb(90%,90%,90%);';
        div_gridItem.addEventListener('mouseover', mouseHover);
        div_gridContainer.appendChild(div_gridItem);
    }
}

createGrid();


button.addEventListener('click', () => {
    dimensions = parseInt(prompt('Chose the side lengths of the next grid: '));
    removeGrid();
    createGrid();
});


