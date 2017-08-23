/*
 * This is the script for index.html page
 */
document.addEventListener("DOMContentLoaded", e => {
	const title = document.querySelector("#titlePanel");
	document.querySelector("button").addEventListener("click", e => {
		title.title = "Your orders";
		title.subtitle = "Here you can see your orders, current orders state, etc";
		title.image = "images/teaser-order.png";
	});
}, true);