$(function(){
	//alert('ok');
	var image = $('.off'); // ampoule eteinte par default


	$('.interrupteur').on('click', function(){ 

	// Declence le click pour allumer la lampe
	var img = image.attr('src');
		if(img === 'images/off.png'){
			image.attr('src','images/on.png');
			$('html').css("background", "url(images/pexels-photo-359564.jpeg) no-repeat center center / cover");
		}else{
			image.attr('src','images/off.png');
			$('html').css("background", "url(images/pexels-photo-265579.jpeg) no-repeat center center / cover");
		}	
	});
});







