var list = document.getElementById('list'),
	add = document.getElementById('addElem');

	add.addEventListener('click', function(){
		var element = document.createElement('li'),
			liElements = document.getElementsByTagName('li');
		
		element.innerHTML = 'item ' + liElements.length;
		list.appendChild(element);	
	});
