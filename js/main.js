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

		if ($(this).width() < 1024) {isMobile = true}
	}).trigger('resize');

	if (!isMobile) {

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
		]
	});
	
});