const body = document.querySelector('body');
const div_gridContainer = document.createElement('div');
const button = document.querySelector('button');
body.appendChild(div_gridContainer);

let dimensions = 16;


function mouseHover(){
    this.classList.add('hover')
}

function removeGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        // div_gridContainer.removeChild(gridItem);
        gridItem.remove();
    });
}

function createGrid() {
    div_gridContainer.style.cssText = `width: 800px; height: 800px; background-color: #d3d3d3; display: inline-grid; 
    grid-template-columns: repeat(${dimensions}, 1fr); border: 50px solid #bd162c; border-radius: 32px;`;
    for (i = 1; i <= (dimensions*dimensions); i++) {
        const div_gridItem = document.createElement('div');
        div_gridItem.classList.add('grid-item')
        div_gridItem.style.cssText = 'height: auto;';
        div_gridItem.addEventListener('mouseover', mouseHover);
        div_gridContainer.appendChild(div_gridItem);
    }
}

createGrid();


button.addEventListener('click', () => {
    dimensions = parseInt(prompt('Chose the side lengths of the next grid: '));
    console.log(dimensions*dimensions);
    removeGrid();
    createGrid();
});


