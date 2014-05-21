(function($) {

	'use strict';

	$('.blox').on('click', function(event) {
		var $this = $(this);
		if($this.hasClass('full')) {
			return
		}
		// $(this).css({
		// 	display: "block"
		// });
		$(this).removeClass('not-full');
		$(this).addClass('full');
		$(this).unbind('click');

		// $this.detach();

		var $prev = $this.prevAll('.full');

		if($prev.length > 0)
			$prev.first().after($this);
		else
			$this.parent().prepend($this);

		var $siblings = $this.siblings('.not-full'),
			sibl_width = 100/$siblings.length;

		$siblings.each(function(index,element){
			if($siblings.length === 1) {
				$(element).removeClass('not-full')
				$(element).addClass('full');
			}

			$(element).css({
				width: (sibl_width-1) + '%'
			});
		});

		// var next = $(this).nextUntil('.full'),
		// 	next_width = 100/next.length;
		// next.each(function(index,element){
		// 	if(next.length === 1) {
		// 		$(element).removeClass('not-full')
		// 		$(element).addClass('full');
		// 	}

		// 	$(element).css({
		// 		width: next_width + '%'
		// 	});
		// });
	});

})(jQuery);
