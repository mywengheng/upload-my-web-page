/**
 * 
 */

function generateLuckyNumber() {
	let a, b, c, d;
	a = Math.floor(Math.random() * 9);
	b = Math.floor(Math.random() * 9);
	c = Math.floor(Math.random() * 9);
	d = Math.floor(Math.random() * 9);
	document.getElementById("luckyNumber").innerHTML =
	a + "" +
	b + "" +
	c + "" +
	d;
	}