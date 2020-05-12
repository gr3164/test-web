$(document).ready(function(){
	$('.slider-battle').slick({
		arrows:false,
		dots:false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		fade: true,
		cssEase: 'linear',
	});
});
$(document).ready(function(){
	$('.slider-s').slick({
		infinite: true,
		arrows:false,
		dots:false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 1500,
	});
});

$(document).ready(function() {
	$('.burger__menu').click(function(event){
		$('.burger__menu,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

//Акардион
$(document).ready(function() {
	$('.features__button').click(function(event) {
		if($('.features__row').hasClass('one')){
			$('.features__button').not($(this)).addClass('active');
			$('.features__button').not($(this)).removeClass('active');
			$('.features__tex').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function() {
	$('.features__item').click(function() {
		
		$('.features__item').removeClass('active');
		
		$(this).toggleClass('active');
	});
});

