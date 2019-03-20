var myRequest = new XMLLHttpRequest();
myRequest.open('GET', 'http://codepen.io/eclairereese/pen/BzQBzR.html');
myRequest.onreadystatecchange = function(){
	if (myRequest.readystate === 4) {
		document.getElementById('ajaxcontent').innerHTML = myRequest.responseText;
	}
};

function sendTheAJAX(){
	myRequest.send();
	document.getElementById('reveal').style.display  = 'none';
}