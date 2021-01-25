$(document).ready(function () {
   $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
       fade: true,
       wrapAround: true
    
    }); 
    
    /*--navbar--*/
    $('.navbar-toggle').on('click',function(){
		$('.navbar-collapse').addClass('opened');
		$('.opacity-all').fadeIn(500);
	});
	$('.opacity-all').on('click',function(){
		$('.navbar-collapse').removeClass('opened');
		$(this).fadeOut(500);
		$('.search-area').removeClass('sticky')
	});
    /*--./navbar--*/
    
    /*--go-to-top*/
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.go-top').fadeIn();
        }
        else {
            $('.go-top').fadeOut();
        }
    });
    $('.go-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
    /*--./go-to-top*/
})