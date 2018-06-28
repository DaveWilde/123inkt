$(document).ready(function(){
  $('.homehero__slides').slick();
});

$('.j-scroll-down').click(function() {
	$('html, body').animate({
	    scrollTop: $(this).closest('header').next('section').offset().top
	}, 1000);
});

$('body').on('mouseover', '.slick-prev', function() {
	$('.homehero__nav .button:first-child').addClass('hover');
});
$('body').on('mouseover', '.slick-next', function() {
	$('.homehero__nav .button:last-child').addClass('hover');
});
$('body').on('mouseleave', '.slick-arrow', function() {
	$('.homehero__nav .button').removeClass('hover');
});

$('.m-nav__menu').click(function() {
	if ($('.m-nav').hasClass('open')) {
		$('.m-nav').removeClass('open');
	} else {
		$('.m-nav').addClass('open');
	}
});