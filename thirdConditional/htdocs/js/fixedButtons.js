$(document).ready(function(){
	$(window).scroll(function(){
		if( $(this).scrollTop() > 500 ){
			$('.ir-arriba, .stopAllAudios, .sugestion-button').fadeIn(300);
		} else {
			$('.ir-arriba, .stopAllAudios, .sugestion-button').fadeOut(300);
		}
	});
});