// Select color input
let color = document.getElementById('colorPicker');
// Select size input
//let height = document.getElementById('inputHeight');
//let width = document.getElementById('inputWidth');
let form = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
form.addEventListener('sumbit', function(event) {
    event.preventDefault();
     //clear grid
    table.innerHTML = '';
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    //form grid
    let numberOfRows = '';
    let numberOfColumns = '';

    
    // testing grid
    //console.log('Height: ' + height + 'and width:' + width);


    //specify grid 
for (let i = 0; i < height; i++) {
        let trElement = document.createElement('tr');
        table.appendChild(trElement);

        for (let j = 0; j < width; j++) {
            let td = document.createElement('td');
            table.appendChild(tdElement);
        }
    }
    
    //add color   
    tdElement.addEventListener('click', function(event) {
        color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
        function makeGrid(width, height) {}
    })
}
);
