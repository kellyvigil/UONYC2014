$(document).ready(function() { 

	  $(".gif").unveil();
	  var gifs = $(".gif");
	  setTimeout(function(){
	  	for (var i=0; i<gifs.length; i++){
		  	if ($(gifs[i]).inView(10)){
		  		$(gifs[i]).trigger("unveil");
		  	}
		} 
	  }, 400);
	// $(".gif").lazyload();
	$(function(){
		$('#Container').mixItUp();
	});

	$('.mix').hover(function() {
		$(this).find('.name').show();
		},
	function() {
		$('.name').hide();
	});

	$('.mix').on('click', function() {
        var correspondingDiv = $(this).attr('data-divider');
        $('.myDivider').each(function() { $(this).hide(); });
        $('.exit').on('click', function() { $('.myDivider').hide(); })
        $(correspondingDiv).show();
        var imageAsset = $(correspondingDiv).find(".photo");
        if (imageAsset.length > 0){
        	$(imageAsset).unveil();
        }
    });

	$( '.cross' ).hide();
	$( '.menu' ).hide();
		$( '.hamburger' ).on('click', function() {
			$( '.menu' ).slideToggle( "slow", function() {
				$( '.hamburger' ).hide();
				$( '.cross' ).show();
			});
		});

	$( '.cross' ).on('click',function() {
		$( '.menu' ).slideToggle( "slow", function() {
			$( '.cross' ).hide();
			$( '.hamburger' ).show();
		});
	});

	$('.noShow').click(function() {
		// var image_href = $(this).attr("href");
		if ($('.noShow').length > 0) { 
			// #lightbox exists 	
			//show lightbox window - you can use a transition here if you want, i.e. .show('fast')
			$('.noShow').show();	
		}
		else { 
			//#lightbox does not exist 
		}
	});

	$('.noShow').on('click', function() {
		$('.noShow').hide();
	});
	
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
});

