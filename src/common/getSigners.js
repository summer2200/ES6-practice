

	function getNewSigners() {

		var newReq = new XMLHttpRequest();
		newReq.open('GET', './test.html');
		newReq.send();
		return newReq;
		// newReq.onreadystatechange = function() {
		// 	if(newReq.readyState === 4 && newReq.status === 200) {
		// 		this.resultTarget.innerHTML = newReq.responseText;
		// 	} else {
		// 		return;
		// 	}

		// };
	}

export {getNewSigners};