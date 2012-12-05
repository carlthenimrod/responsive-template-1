//on ready
$(function(){

	//activate menu slicer
	$('#rp-top-nav ul').menuSlicer({
		whiteList : ['rp-top-nav-home', 'rp-top-nav-about-us', 'rp-top-nav-contact-us', 'rp-top-nav-rfq']
	});	

	var	arrow,
		imgUrl,
		parent,
		menu,
		open = false;

	//on h1 click
	$('.rp-menu h1').on('click', function(){

		//find parent
		parent = $(this).parent();

		//find menu
		menu = parent.find('ul');

		//find arrow
		arrow = parent.find('.rp-arrow');

		//if arrow is visible, hide menu
		if(arrow.css('display') === 'block'){

			//if opened
			if(open){

				//hide menu
				menu.slideToggle();

				//change arrow image
				arrow.css('background-image', 'url(img/arrow-menu-up.png)');

				//not open
				open = false;
			}
			else{

				//show menu
				menu.slideToggle();

				//change arrow image
				arrow.css('background-image', 'url(img/arrow-menu-down.png)');

				//open
				open = true;
			}
		}
	});
});