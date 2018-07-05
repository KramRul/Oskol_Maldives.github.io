$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
		if(windowTop > 100)
		{ 
			$('#logo').css('width','200px');
			$('#logo').css('height','90px');			   
		} else 
		{
			$('#logo').css('width','250px');
			$('#logo').css('height','115px');	
		}
		if($('nav').hasClass('navShadow')) 
		{
			$('#word-mark').css({'width':'0px','height':'0px','opacity':'0'});
		} else
		{
			if($(window).width()>491)
			{
				$('#word-mark').css({'width':'120px','height':'auto','opacity':'1'});
			}
		}
	});
	
	$(window).resize(()=>{
		var width = $(window).width();
		if(width <=491){ 
			/*$('nav').addClass('navShadow');*/
			$('#word-mark').css({'width':'0px','height':'0px','opacity':'0'});
		} else {
			/*$('nav').removeClass('navShadow');*/
			if(!$('nav').hasClass('navShadow')) 
			{
				$('#word-mark').css({'width':'120px','height':'auto', 'opacity':'1'});
			} else
			{
				$('#word-mark').css({'width':'0px','height':'0px', 'opacity':'0'});
			}
		}
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});