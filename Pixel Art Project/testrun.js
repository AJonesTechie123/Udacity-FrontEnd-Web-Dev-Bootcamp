// Select color input
let colorPicked = document.getElementById('colorPicker');
// Select size input
let table = document.getElementById('pixelCanvas');
let form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function(event){
    event.preventDefault();
    //clear grid
    table.innerHTML = '';
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    // this will help define grid size
    let numberOfRows = '';
    let numberOfColumns = '';
for(let i = 0; i < height; i++) {
    let trElem = document.createElement('tr');
    table.appendChild(trElem);

    for(let y = 0; y < width; y++) {
        let td = document.createElement('td');
        trElem.appendChild(td);
        // this will allow user to pick colors
        td.addEventListener('click', function(event) {
            let colorPicked = documemt.getElementById('colorPicker').value;
            event.target.style.backgroundColor = colorPicked;
        function makeGrid (height, width) {}
        });
    }
}
});
