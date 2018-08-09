$(function(){
	
	// --------------------------------------- SLICK SLIDER --------------------------------------- //

	$('.pic2 .items-wrapper').slick({ 
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: 0,
		dots: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		      	}
		    },
		    {
				breakpoint: 851,
				settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
		      	}
		    },
		    {
				breakpoint: 700,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode: true, 
			        arrows: false
		      	}
		    },
		    {
				breakpoint: 500,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        centerMode: false, 
			        arrows: false,
			        dots: true
		      	}
		    }
		]
	});

	function slickInit(target) {
		console.log(target);
		target.not('.slick-initialized').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			rows: 0,
			dots: false,
			autoplay: false,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
				        slidesToShow: 4,
				        slidesToScroll: 1
			      	}
			    },
			    {
					breakpoint: 1200,
					settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1 
			      	}
			    },
			    {
					breakpoint: 961,
					settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1 
			      	}
			    },
			    {
					breakpoint: 600,
					settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        centerMode: true
			      	}
			    },
			    {
					breakpoint: 490,
					settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        centerMode: false,
				        arrows: false,
				        dots: true
			      	}
			    }
			]
		});
	}

	// --------------------------------------- /SLICK SLIDER --------------------------------------- //


	// --------------------------------------- TABS --------------------------------------- //

	$('.tabs-nav a').on('click', function (event) {
		var $this = $(this),
			tabId = $this.attr('href');
	    event.preventDefault();
	    
	    $('.tab-active').removeClass('tab-active');
	    $this.parent().addClass('tab-active');
	    $('.tabs-stage > div').hide();
	    $(tabId).fadeIn();

	    slickInit($(tabId).find('.app-screens'));
	});

	$('.tabs-nav a:first').trigger('click'); // Default

	// --------------------------------------- /TABS --------------------------------------- //


	// --------------------------------------- PARTICLES --------------------------------------- //

	var particles_json = {
        "particles": {
            "number": {
                "value": 100,
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
                "speed": 5,
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

	particlesJS('particles-js',	particles_json);

	// --------------------------------------- /PARTICLES --------------------------------------- //


	$('.scroll-down').on('click', function(e){
		var $this = $(this);
		
		$('html, body').animate({
			scrollTop: $this.closest('.pic1').outerHeight()
		}, 1400)
		
	});

	
});