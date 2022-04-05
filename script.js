const body = document.querySelector('body');
const div_gridContainer = document.createElement('div');
body.appendChild(div_gridContainer);

let templateColumns = ''
for (i = 0; i < 16; i++) {
    templateColumns = templateColumns + '50px '
}


div_gridContainer.style.cssText = `background-color: #bd162c; display: inline-grid; grid-template-columns: ${templateColumns}`;


function mouseHover(){
    this.classList.add('hover')
}

for (i = 1; i <= 256; i++) {
    const div_gridItem = document.createElement('div');
    div_gridItem.style.cssText = 'height: 50px; border: 2px solid black';
    div_gridItem.addEventListener('mouseover', mouseHover);
    div_gridContainer.appendChild(div_gridItem);
}

