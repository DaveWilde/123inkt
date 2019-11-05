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

$('.product__selection-choice a').click(function(){
	var price = $(this).attr('data-price');
	var amount = $(this).attr('data-amount');
	$('.product__selection-choice a').removeClass('selected');
	$(this).addClass('selected');
	$('.product__pay input[type="button"]').removeAttr('disabled');
	$('.product__price').text(price);
	$('.amount').text(amount);
});