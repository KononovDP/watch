$(document).ready(function() {

	var scrollTop = $(window).scrollTop(),
		windowWidth = $(window).width();

	(function($) {
		$.fn.removeClassWild = function(mask) {
			return this.removeClass(function(index, cls) {
				var re = mask.replace(/\*/g, '\\S+');
				return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
			});
		};
	})(jQuery);
	
	//lock/unlock body scroll
	function lockBody() {
		if($(window).scrollTop()) {
		 	scrollTop = $(window).scrollTop();
		 	$('.wrapper').css({
		 		top: - (scrollTop)
		 	});
		}
		$('html,body').css({height: "100%", overflow: "hidden"});
	}
	function unlockBody() {
		$('html,body').css({height: "", overflow: ""});
		$('.wrapper').css({
			top: ''
		});
		window.scrollTo(0, scrollTop);
		window.setTimeout(function () {
			scrollTop = null;
		}, 0);
	}


	//tabs on JS
	$('.tab-toggle').on('click' , function() {

		$(this).closest('.tabs-header').find('.tab-toggle_active').removeClass('tab-toggle_active');
		$(this).addClass('tab-toggle_active');

		var dataTab = $(this).attr("data-tab");

		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab]").removeClass('tab-content_active');
		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab='"+dataTab+"']").addClass('tab-content_active');

		return false;
	});

	
	//object-fit polyfill
	objectFitImages('.cover-img')

	//
	if (windowWidth <= 1024) {
		$('.dropdown').append($('.header-nav .nav'));
	};

	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		asNavFor: '.main-slider-nav'
	});
	$('.main-slider-nav').slick({
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.main-slider',
		arrows: false,
		dots: false,
		autoplay: true,
		focusOnSelect: true
	});
	
	$('.advantages-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev">&nbsp;</button>',
		nextArrow: '<button type="button" class="slick-next">&nbsp;</button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$('.single-slider').slick({
		dots: true,
		arrows: false,
	});
	
	$('.aside-catalog-btn').on('click' , function() {
		$(this).next('.aside-catalog').slideToggle(300);
		return false;
	})

	$(".scrollbar").mCustomScrollbar();

	$('select').selectric();

	$('.accordion-header').on('click' , function(){
		$(this).closest('.accordion-item').find('.accordion-body').slideToggle(300);
		return false
	})


	$('.toggler').on('click' , function() {
		$('.toggler').removeClass('toggler_active');
		$(this).addClass('toggler_active');
		$('.catalog-grid').removeClassWild('catalog-grid-*');
		return false
	});

	$('.toggler_one').on('click' , function() {
		$('.catalog-grid').addClass('catalog-grid-1')
	})
	$('.toggler_two').on('click' , function() {
		$('.catalog-grid').addClass('catalog-grid-2')
	})
	$('.toggler_four').on('click' , function() {
		$('.catalog-grid').addClass('catalog-grid-4')
	})

	 $('.product-slider').slick({
	 	arrows: false,
		fade: true,
		asNavFor: '.product-slider-nav'
	});
	$('.product-slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
  		focusOnSelect: true
	});
	

}); 
