class Refresh {
	constructor(config) {
		this.target = config.target;
	}
	run() {
		this.target.innerHTML = `
			<p>Hello from ES2015</p>
		`;
	}

	doRefresh() {
		
		document.getElementById('refresh').addEventListner('click', makeRequest);
	}

	makeRequest() {
		var httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
			alert('Giving up');
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		httpRequest.open('GET', 'test.html');
		httpRequest.send();
	}

	alertContents() {
		
	}


	ten() {
		return 10;
	}
}

export default Refresh;