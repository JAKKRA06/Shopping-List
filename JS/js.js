

var newElement = document.createElement('li');

var newProduct = document.createTextNode('kuba');

newElement.appendChild(newProduct);

var position = document.getElementsByClassName('one');

position.appendChild(newElement);
