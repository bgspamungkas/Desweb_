$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	if(wScroll > $('.marketing').offset().top ) {
		$('marketing .thumbnail').each(function(i) {
			setTimeout(function () {
			*$('.marketing .thumbnail').eq(i).addclass('muncul');
			}, 200 * (i+1));
			});
		
	}

