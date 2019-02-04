
var array = [];               // inicjalizacja tablicy


function addItem(event) {
    
var text = document.getElementById('listItem').value;
array.push(text);


var list = '<p>' + array + '</p>'+'</br>';

var element = document.getElementById('list');
element.innerHTML = list;

event.preventDefault();
}





var input = document.getElementById('inputForm');
input.addEventListener('submit', addItem, false);

