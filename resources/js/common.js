$(document).ready(function() {

	var scrollTop = $(window).scrollTop(),
		windowWidth = $(window).width();

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

	//popup
	$('.js-show-popup').on('click', function() {
		var dataPopup = $(this).attr("data-popup");

		$(".popup-overlay[data-popup='"+dataPopup+"']").fadeIn('500');

		var parentHeight = $('.popup-centering').height();
		var childrenHeight = $('.popup').height();

		if (childrenHeight >= parentHeight) {
			$('.popup').addClass('popup-scrollable');
		} else {
			$('.popup').removeClass('popup-scrollable');
		}

		$(window).resize(function(event) {
			var parentHeight = $('.popup-centering').height();

			var childrenHeight = $('.popup').height();

			if (childrenHeight >= parentHeight) {
				$('.popup').addClass('popup-scrollable');
			} else {
				$('.popup').removeClass('popup-scrollable');
			}
		});
	});

	$('.js-close-popup').on('click' , function() {
		$('.popup-overlay').fadeOut('500');
	});

	
	//blocks with equal height
	$(window).on('load resize', function() {
		$(".item-wrap").each(function () {
			var itemParent = $(this);
			var maxHeight = 0;

			itemParent.find('.item').each(function () {
			   $(this).height('auto');
			   var itemHeight = parseInt($(this).height());
			   if(itemHeight > maxHeight) {
				  maxHeight = itemHeight;
			   };
			});
			itemParent.find('.item').height(maxHeight);
		})
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
		nextArrow: '<button type="button" class="slick-next">&nbsp;</button>'
	});

	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});
	

}); 
