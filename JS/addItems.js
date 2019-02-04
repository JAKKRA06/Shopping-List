
function addItem(event) {

	var position = document.getElementById('list');   

	var text = document.getElementById('listItem').value;

	var newEle = document.createElement('p');

	var textNode = document.createTextNode(text);

	newEle.appendChild(textNode);


	position.appendChild(newEle);

	event.preventDefault();

}

var input = document.getElementById('inputForm');
input.addEventListener('submit', addItem, false);
