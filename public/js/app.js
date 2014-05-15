(function($) {

	'use strict';

	$('.blox').on('click', function(event) {
		// $(this).css({
		// 	display: "block"
		// });
		$(this).removeClass('not-full');
		$(this).addClass('full');
		$(this).unbind('click');

		var previous = $(this).prevUntil('.full'),
			prev_width = (100/previous.length);

		previous.each(function(index,element){
			if(previous.length === 1) {
				$(element).removeClass('not-full')
				$(element).addClass('full');
			}

			$(element).css({
				width: prev_width + '%'
			});
		});

		var next = $(this).nextUntil('.full'),
			next_width = 100/next.length;
		next.each(function(index,element){
			if(next.length === 1) {
				$(element).removeClass('not-full')
				$(element).addClass('full');
			}

			$(element).css({
				width: next_width + '%'
			});
		});
	});

})(jQuery);
