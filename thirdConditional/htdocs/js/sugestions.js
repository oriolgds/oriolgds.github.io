window.addEventListener('load', function() {
    document.getElementById("send-icon").style.display = 'inline';
	document.getElementById("send-icon-loading").style.display = 'none';
});
function textchange(){
	document.getElementById("send-icon").style.display = 'none';
	document.getElementById("send-icon-loading").style.display = 'inline';
}
let tabOpened = false;
function openTabSugest(){
	if (tabOpened == false){
		document.getElementById("light-sugestion").style.display = 'none';
		document.getElementById("cross-sugestion").style.display = 'inline';
		document.querySelector("body").style.overflowY = 'hidden';
		$('.background-solid').fadeIn(300);
		$('.sugestion-form').toggleClass('animate-scale-up');
		tabOpened = true;
	}
	else {
		document.getElementById("light-sugestion").style.display = 'inline';
		document.getElementById("cross-sugestion").style.display = 'none';		
		$('.sugestion-form').toggleClass('animate-scale-up');
		$('.background-solid').fadeOut(400);
		document.querySelector("body").style.overflowY = 'scroll';
		tabOpened = false;		
	}
}