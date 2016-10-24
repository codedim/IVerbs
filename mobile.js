
function isSet(testVar) {
	return !(typeof(testVar) == 'undefined' || testVar === null);
}

window.onload = function() {
	var fullScreenBnt = document.getElementById('fullScreenBnt');
	if (isSet(fullScreenBnt)) {
		fullScreenBnt.addEventListener('mousedown', addResizer, false);
		fullScreenBnt.addEventListener('touchstart', addResizer, false);

		fullScreenBnt.addEventListener('mouseup', freeResizer, false);
		fullScreenBnt.addEventListener('mouseout', freeResizer, false);
		fullScreenBnt.addEventListener('touchend', freeResizer, false);
	}
}

window.onscroll = function() {
	holdBodyPosition();
}

function addResizer() {
	if (!isSet(fullScreenBnt)) return;

	var body = document.body
	if (!isSet(body)) return;

	var resizer = document.createElement('div');
	body.appendChild(resizer);
	resizer.id = 'scrResizer';

	resizer.style.position = 'absolute';
	resizer.style.top = '0px';
	resizer.style.height = '100vh';
	resizer.style.width = '1px';

	var scrHeight = resizer.clientHeight;
    resizer.style.minHeight = (scrHeight  * 20) + 'px';
};

function freeResizer() {
	if (!isSet(fullScreenBnt)) return;

	var body = document.body;
	var resizer = document.getElementById('scrResizer');
	if (!isSet(body) || !isSet(resizer)) return;

	setTimeout(function() {
		while (resizer) {
			body.removeChild(resizer);
			resizer = document.getElementById('scrResizer');
		}
		freeBodyPosition();
	}, 600);
};

function holdBodyPosition() {
	if (!document.getElementById('scrResizer')) return;

	var body = document.body;
	body.style.marginTop = body.scrollTop;
}

function freeBodyPosition() {
	document.body.style.marginTop = '';
}