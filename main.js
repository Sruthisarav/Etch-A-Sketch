const container = document.querySelector('#container');
let size = 16;
const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid)
function changeColor(e) {
    ele = e.target;
    ele.classList.add('color');
}
function makeGrid(size) {
    n = size * size
    let grid_width = size * 600/size;
    container.setAttribute('style', 'max-width: ' + grid_width + 'px;' +
        'grid-template-columns: repeat(' + size + ', 1fr);');
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = 600/size + 'px';
        div.style.height = 600/size + 'px';
        div.addEventListener('mouseover', e => changeColor(e));
        container.appendChild(div);
    }
}
makeGrid(size);
function valid_input(n) {
    if (isNaN(n) || n > 100 || n < 2) {
        return false;
    }
    return true;
}
function resetGrid() {
    let arr = container.getElementsByClassName('box');
    while(arr.length != 0) {
        arr[0].remove();
    }
    let valid = false;
    while(!valid) {
        size = parseInt(prompt("Please enter an integer between 2 and 100"));
        valid = valid_input(size);
    }
    makeGrid(size);
}