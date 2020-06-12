$(document).ready(function() {
    $('.header__account__icon').click(function(event) {
        $('.header__account__icon,.header__account__list').toggleClass('active');
        $('body').toggleClass('lock');

    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__bottom__menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});



$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		adaptiveHeight: true,
		slidesToShow:1,
		infinite:true,
		autoplay:true,
		speed:3000,
		autoplaySpeed:2400,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					arrows : false,
					dots: true
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.sliderRight').slick({
		arrows:false,
		dots:true,
		adaptiveHeight: true,
		slidesToShow:1,
		infinite:true,
		autoplay:true,
		speed:3000,
		autoplaySpeed:2400,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});