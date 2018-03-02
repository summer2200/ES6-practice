// import Hello from './hello'

// (new Hello({
// 	target: document.getElementsByTagName('main')[0]
// })).run();

import {getNewSigners} from './common/getSigners';

document.getElementById('refreshSigners').onclick = function() {
	var req = getNewSigners();
	req.onreadystatechange = function() {
		if(req.readyState === 4 && req.status === 200) {
			document.getElementById('signerList').innerHTML = req.responseText;
		} else {
			return;
		}

	};
};
