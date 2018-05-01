  $(this).hide();
	$('.front').addClass('front-open');
	$('.back').addClass('back-open');
	$('.opened').addClass('opened-open');
	$('.modal').show();
	setTimeout(function() {
		$('.modal').addClass('shadow');
	}, 1000);
	setTimeout(function() {
		$('.front').removeClass('front-open');
		$('.back').removeClass('back-open');
		$('.opened').removeClass('opened-open');
	}, 1200);
  $('.wrapper').delay(500).fadeIn();

$('.close').click(function() {
        $('.modal').remove();
})

