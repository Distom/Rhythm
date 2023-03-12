"use strict"

const swiper = new Swiper('.swiper', {
	// Optional parameters
	autoHeight: true,
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

document.addEventListener('click', function (event) {
	let link = event.target;
	if (!(link.classList.contains('header__link') ||
		link.classList.contains('footer__link'))) return;

	let href = link.getAttribute('href');
	if (!href || href == '#') return;

	let target = document.querySelector(href);
	if (!target) return;

	target.scrollIntoView({ behavior: "smooth", block: "start" });
	event.preventDefault();
});