
function clearAll() {
	alert('Wyczyścić całą liste ?');
	document.getElementById('list').innerHTML = '';
}


var button = document.getElementById('button');
button.addEventListener('click', clearAll, false);