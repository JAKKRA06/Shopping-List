
var array = [];               // inicjalizacja tablicy


function addItem(event) {

var element = document.getElementById('list');    
var text = document.getElementById('listItem').value;
array.push(text);

for (var i = 0; i < array.length; i++) {

    var list = '<p>' + array[i] + '</p>'+'<br / >';

    element.innerHTML = list;	
}



event.preventDefault();
}





var input = document.getElementById('inputForm');
input.addEventListener('submit', addItem, false);

