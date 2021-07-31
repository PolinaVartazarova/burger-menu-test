const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
	const menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}





// для jQuery
// $(document) ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger, header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });
