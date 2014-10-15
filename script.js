$(document).ready(function() {
	$('.folio').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
	})

	$('.folio').mouseleave(function() {
		$(this).fadeTo('slow', 1);
	})
	$("#spoiler").click(function () {
		$("#hide").slideToggle('fast');
	});
	$("#spoiler2").click(function () {
		$("#hide2").slideToggle('fast');
	});
	$("#spoiler3").click(function () {
		$("#hide3").slideToggle('fast');
	});
	$("#spoiler4").mouseenter(function () {
		$("#hide4").fadeTo('slow',1);
	});
	$("#spoiler4").mouseleave(function(){
		$("#hide4").fadeTo('slow',0);
	});
	
	$("#spoiler5").mouseenter(function () {
		$("#hide5").fadeTo('slow',1);
	});
	$("#spoiler5").mouseleave(function(){
		$("#hide5").fadeTo('slow',0);
	});
	$("#spoiler6").click(function () {
		$("#hide6").slideToggle('fast');
	});
	$('a').click(function() {
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    return false;
	});
})


