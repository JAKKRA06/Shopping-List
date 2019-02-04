
function addItem(event) {

	var position = document.getElementById('list');   

	var text = document.getElementById('listItem').value;

	var newEle = document.createElement('p');

	var textNode = document.createTextNode(text);

	newEle.appendChild(textNode);

    newEle.className = 'normalItem';
    
	position.appendChild(newEle);

	event.preventDefault();
    document.getElementById('listItem').value = null;
}

var input = document.getElementById('inputForm');
input.addEventListener('submit', addItem, false);
