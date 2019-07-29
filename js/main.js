


//---------------Menu toggle---------------//
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
});





//------------Carousel---------------------//
jQuery(document).ready(function () {
    
	"use strict";
	
	$("#slider-carousel").carouFredSel({
		responsive: true,
		width: "100%",
		circular: true,
		scroll: {
			items: 1,
			duration: 500,
			pauseOnHover: true
		},
		auto: true,
		items: {
			visible: {
				min: 1,
				max: 1
			},
			height: "vaiable"
		},
		pagination: {
			container: ".sliderpager",
			pageAnchorBuilder: false
		}
    })
 
	
});


	// $(window).scroll(function () {
	//     var top = $(window).scrollTop();
	//     if (top >= 60) {
	// 	    $("header").addClass("secondary");
	//     }
		
	// 	     else if ($("header").hasClass("secondary")) {
	// 	    $("header").removeClass("secondary");
	//     }
	
	// });



//-----------Scroll to top--------------//

document.addEventListener('DOMContentLoaded', function () {
	let gototop = document.querySelector('.gototop');
	let body = document.documentElement;

	window.addEventListener('scroll', check);

	function check() {
		pageYOffset >= 500 && gototop.classList.add('visible');
		pageYOffset < 500 && gototop.classList.remove('visible');
	}

	gototop.onclick = function() {
		animate({
			duration: 1500,
			timing: gogototopEaseOut,
			draw: progress => 
				body.scrollTop = (body.scrollTop * (1 - progress / 7))
		});
	}

	let circ = timeFraction =>
		1 - Math.sin(Math.acos(timeFraction > 1 ? timeFraction = 1 : timeFraction));

		let makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction);
		let gogototopEaseOut = makeEaseOut(circ);

});

function animate(options) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / options.duration;
		timeFraction > 1 && (timeFraction = 1);

		let progress = options.timing(timeFraction)

		options.draw(progress);
		timeFraction < 1 && requestAnimationFrame(animate);
	});
}





//------------Our team slider----------------//
$(function(){
	$("#customers-testimonials").owlCarousel({
		items: 2,
		itemsTablet:[1190,1],
		itemsMobile: [768,1],
		autoplay:5000,
		smartSpeed: 700,
		look:true,
		autoPlayHoverPause:true,
		navigation: true,
		slideSpeed: 1000,
		responsive:true

	});
});



AOS.init({
	disable: false,
	startEvent: 'DOMContentLoaded',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassName: true,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 99,
	
	offset: 200,
	delay: 100,
	duration: 800,
	easing: 'ease-in-quad',
	once: false,
	mirror: false,
	anchorPlacement: 'top-center',
});