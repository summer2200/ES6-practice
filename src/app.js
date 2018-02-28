// import Hello from './hello'

// (new Hello({
// 	target: document.getElementsByTagName('main')[0]
// })).run();

document.getElementById('refreshSigners').onclick = function() {
	var newReq = new XMLHttpRequest();
	newReq.open('GET', 'test.html');
	newReq.send();
	newReq.onreadystatechange = function() {
		if(newReq.readyState === 4 && newReq.status === 200) {
			document.getElementById('signerList').innerHTML = newReq.responseText;
		} else {
			return;
		}

	};
};
