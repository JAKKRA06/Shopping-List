/*var text = '<li class=\"hot\">Mleko</li>';






var ele = document.getElementByClassName('one');
ele.firstChild.nodeValue = textCont;


var elem = document.getElementById('listItem');
var elemResult = document.getElementByClassName('one');

function addItem () {

	var item = elem.value;
	elemResult.textContent = item;
}

elem.addEventListener('blur', addItem, false);


var elementUl = document.getElementByTagName('ul')[0];
var textCont = document.getElementById('listItem').value;
document.write(textCont);

////////////////////////////////////////////////////////////////////////////////////
var message = document.getElementByClassName('message'); 
function checkInput (event) {
	if(this.value.length < 1) {
		message.innerHTML = 'Wypełnij pole tekstowe !';
	} else {
		message.innerHTML = '';
	}
}


var elementForm = document.getElementById('inputForm');
elementForm.addEventListener('submit', checkInput, false);
///////////////////////////////////////////////////////////////////////////////////

function startWriting () {
	var text = document.getElementById('listItem');
	text.focus();
}

window.addEventListener('load', startWriting, false);


var newElement = document.createElement('li');

var newProduct = document.createTextNode('ocet');

newElement.appendChild(newProduct);

var position = document.getElementByClassName('list');

position.appendChild(newElement);*/
