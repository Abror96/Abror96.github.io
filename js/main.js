$(function(){
	
	// --------------------------------------- CUSTOM SCROLL --------------------------------------- //
	var parentBlock = $('.block1'),
		$window = $(window),
		blockHeight = $window.height(),
		blockPic1 = parentBlock.find('>*').eq(0),
		blockPic2 = parentBlock.find('>*').eq(1),
		blockPic3 = parentBlock.find('>*').eq(2),
		blockPic1Img = parentBlock.find('>*').eq(0).find('[data-background=bg]'),
		blockPic2Img = parentBlock.find('>*').eq(1).find('[data-background=bg]'),
		abc = false,
		step = 0,
		isMobile = false;



	$window.on('resize', function(){
		var blockHeight = $window.height();
		parentBlock.height(blockHeight*3);
		blockPic1.height(blockHeight);
		blockPic2.height(blockHeight);
		blockPic3.height(blockHeight);

		if ($(this).width() < 1024) {isMobile = true;}
		else {isMobile = false;}

		if (!isMobile) {
			customScroll();
		}
	}).trigger('resize');

	function customScroll() {
		$window.scroll(function(e){

			var windowScrollTop = $window.scrollTop(),
			kosfigScrollTop = parentBlock.offset().top;

			currentScrollTop = windowScrollTop;

			if (windowScrollTop >= (kosfigScrollTop + blockPic1.height()*2) ) {
				parentBlock.removeClass('before active').addClass('after');
				
				abc = true;

				blockPic1.css({
					'transform': 'translateY('+(-blockPic2.height())+'px)'
				});
				blockPic2.css({
					'transform': 'translateY('+(-blockPic2.height())+'px)'
				});
				blockPic1Img.css({
					'transform': 'translateY('+(blockPic2.height())+'px)'
				});
				blockPic2Img.css({
					'transform': 'translateY('+(blockPic2.height())+'px)'
				});
			} else if (windowScrollTop >= (kosfigScrollTop+blockPic1.height())) {
				if (!abc) {
					$window.scrollTop(kosfigScrollTop);
					abc = true;
				}
				
				step = windowScrollTop - kosfigScrollTop - blockPic1.height();

				parentBlock.removeClass('before after').addClass('active');

				blockPic2.css({
					'transform': 'translateY('+(-step)+'px)'
				});
				blockPic2Img.css({
					'transform': 'translateY('+(step)+'px)'
				});
				blockPic1.css({
					'transform': 'translateY('+(-blockPic2.height())+'px)'
				});
				blockPic1Img.css({
					'transform': 'translateY('+(blockPic2.height())+'px)'
				});

			} else if (windowScrollTop >= (kosfigScrollTop)) {
				if (!abc) {
					$window.scrollTop(kosfigScrollTop);
					abc = true;
				}
				parentBlock.removeClass('before after').addClass('active');

				step = windowScrollTop - kosfigScrollTop;

				blockPic1.css({
					'transform': 'translateY('+(-step)+'px)'
				});

				blockPic1Img.css({
					'transform': 'translateY('+(step)+'px)'
				});
				blockPic2.css({
					'transform': 'translateY('+(0)+'px)'
				});
				blockPic2Img.css({
					'transform': 'translateY('+(0)+'px)'
				});

			} else {
				abc = false;
				parentBlock.removeClass('active').addClass('before');
				step = 0;
				blockPic1.css({
					'transform': 'translateY('+(0)+'px)'
				});
				blockPic2.css({
					'transform': 'translateY('+(0)+'px)'
				});
				blockPic1Img.css({
					'transform': 'translateY('+(0)+'px)'
				});
				blockPic2Img.css({
					'transform': 'translateY('+(0)+'px)'
				});
			}
			tempScrollTop = currentScrollTop;
		}).trigger('scroll');
	}
	// --------------------------------------- /CUSTOM SCROLL --------------------------------------- //


	// --------------------------------------- SLICK SLIDER --------------------------------------- //

	$('.pic2 .items-wrapper').slick({ 
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: 0,
		dots: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true
		      	}
		    },
		    {
				breakpoint: 851,
				settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true
		      	}
		    },
		    {
				breakpoint: 700,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode: true,
			        infinite: true,
			        arrows: false
		      	}
		    },
		    {
				breakpoint: 500,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode: false,
			        infinite: true,
			        arrows: false,
			        dots: true
		      	}
		    }
		]
	});

	// --------------------------------------- /SLICK SLIDER --------------------------------------- //


	// --------------------------------------- TABS --------------------------------------- //

	$('.tabs-nav a').on('click', function (event) {
		var $this = $(this);
	    event.preventDefault();
	    
	    $('.tab-active').removeClass('tab-active');
	    $this.parent().addClass('tab-active');
	    $('.tabs-stage > div').hide();
	    $($this.attr('href')).fadeIn();
	    console.log($($this.attr('href')));
	});

	$('.tabs-nav a:first').trigger('click'); // Default

	// --------------------------------------- /TABS --------------------------------------- //


	// --------------------------------------- PARTICLES --------------------------------------- //

	particlesJS('particles-js',
	    {
	        "particles": {
	            "number": {
	                "value": 80,
	                "density": {
	                    "enable": true,
	                    "value_area": 800
	                }
	            },
	            "color": {
	                "value": "#ffffff"
	            },
	            "shape": {
	                "type": "circle",
	                "stroke": {
	                    "width": 0,
	                    "color": "#000000"
	                },
	                "polygon": {
	                    "nb_sides": 5
	                },
	                "image": {
	                    "src": "img/github.svg",
	                    "width": 100,
	                    "height": 100
	                }
	            },
	            "opacity": {
	                "value": 0.5,
	                "random": false,
	                "anim": {
	                    "enable": false,
	                    "speed": 1,
	                    "opacity_min": 0.1,
	                    "sync": false
	                }
	            },
	            "size": {
	                "value": 5,
	                "random": true,
	                "anim": {
	                    "enable": false,
	                    "speed": 40,
	                    "size_min": 0.1,
	                    "sync": false
	                }
	            },
	            "line_linked": {
	                "enable": true,
	                "distance": 150,
	                "color": "#ffffff",
	                "opacity": 0.4,
	                "width": 1
	            },
	            "move": {
	                "enable": true,
	                "speed": 6,
	                "direction": "none",
	                "random": false,
	                "straight": false,
	                "out_mode": "out",
	                "attract": {
	                    "enable": false,
	                    "rotateX": 600,
	                    "rotateY": 1200
	                }
	            }
	        },
	        "interactivity": {
	            "detect_on": "canvas",
	            "events": {
	                "onhover": {
	                    "enable": true,
	                    "mode": "repulse"
	                },
	                "onclick": {
	                    "enable": true,
	                    "mode": "push"
	                },
	                "resize": true
	            },
	            "modes": {
	                "grab": {
	                    "distance": 400,
	                    "line_linked": {
	                        "opacity": 1
	                    }
	                },
	                "bubble": {
	                    "distance": 400,
	                    "size": 40,
	                    "duration": 2,
	                    "opacity": 8,
	                    "speed": 3
	                },
	                "repulse": {
	                    "distance": 200
	                },
	                "push": {
	                    "particles_nb": 4
	                },
	                "remove": {
	                    "particles_nb": 2
	                }
	            }
	        },
	        "retina_detect": true,
	        "config_demo": {
	            "hide_card": false,
	            "background_color": "#b61924",
	            "background_image": "",
	            "background_position": "50% 50%",
	            "background_repeat": "no-repeat",
	            "background_size": "cover"
	        }
	    }

	);

	// --------------------------------------- /PARTICLES --------------------------------------- //
	
});