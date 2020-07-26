// burger menu responsive js
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', function() {
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
});
