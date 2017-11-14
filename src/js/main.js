require('../css/main.css');
import lib from './lib/lib';
var main = {
	bindEvent: function() {
		console.log('55555');
		document.querySelector('#btn1').addEventListener('click', function() {
			console.log('666');
			document.querySelector('.div1').innerHTML = lib.add(1, 4);
		});
		document.querySelector('#btn2').addEventListener('click', function() {
			lib.ajax({
				type: 'GET',
				url: '/register/hasUser',
				success: function(data) {
					document.querySelector('.div1').innerHTML = JSON.parse(data).status.msg;
				}
			})
		});
	},
	init: function() {
		console.log(123);
		this.bindEvent();
	}
}
export default main;