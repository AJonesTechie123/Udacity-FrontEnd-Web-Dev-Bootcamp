// Select color input
let color = document.getElementById('colorPicker');
// Select size input
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListner('sumbit', function(event) {
    event.preventDefault();
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    //let rows = '';
    //let columns = '';

    //makeGrid(height, width);

    // testing grid
    //console.log('Height: ' + height + 'and width:' + width);


function makeGrid(height, width) {
    //clear grid
    table.innerHTML = '';
    
    //specify grid 
    for (let i = 0; i < height; i++) {
        const trElement = document.createElement('tr');
        pixelCanvas.appendChild(trElement);

        for (let j = 0; j < width; j++) {
            const td = document.createElement('td');
            pixelCanvas.appendChild(tdElement);
        }
    }
    
    //add color   
    tdElement.addEventListner('click', function(event) {
        color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
        function makeGrid(height, width) {}
    })
}
})


