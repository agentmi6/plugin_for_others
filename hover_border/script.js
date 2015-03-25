$(function(){
	$('div img').on("mouseenter", function(){
		$(this).css("border","3px ridge #fff");
	});

	$('div img').on("mouseleave", function(){
		$(this).css("border","0px");
	});


});