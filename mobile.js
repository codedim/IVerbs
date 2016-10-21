
function isSet(testVar) {
	return !(typeof(testVar) == 'undefined' || testVar === null);
}

function fullScreen() {
	const barHeight = 50; // height of mobile browser menu bar 

	var body = document.getElementsByTagName('body')[0];
	if (!isSet(body)) return;

	var resizer = document.createElement('div');
	body.appendChild(resizer);

	resizer.style.position = 'absolute';
	resizer.style.top = '0px';
	resizer.style.height = '100vh';

resizer.style.width = barHeight + 'px';
resizer.style.backgroundColor = '#ccc';

	var scrHeight = resizer.clientHeight;
    resizer.style.minHeight = scrHeight + barHeight + 'px';

	var timer, scroller = 0;
	function scrollBy() {
		window.scrollTo(0, scroller);		
		if (++scroller >= barHeight) clearInterval(timer);
	}

	timer = setInterval(scrollBy, 40);
}
