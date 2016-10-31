$(document).ready(function(){
	// $('.flexslider').flexslider({
	// 	animation: "slide",
	// 	animationLoop: true
	// });

	$('#games-tab').click(function(){
		$('#games').show();
		$('#games-tab').addClass('active');

		$('#websites').hide();
		$('#websites-tab').removeClass('active');

	});
	$('#websites-tab').click(function(){
		$('#websites').show();
		$('#websites-tab').addClass('active');

		$('#games').hide();
		$('#games-tab').removeClass('active');
		

	});
});