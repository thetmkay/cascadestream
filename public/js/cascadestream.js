(function($) {

	'use strict';

	$.fn.cascadeStream = function() {
		$('.cs-block').on('click', function(event) {
			var $this = $(this);
			if($this.hasClass('cs-full')) {
				return
			}
			// $(this).css({
			// 	display: "block"
			// });
			$(this).removeClass('cs-not-full');
			$(this).addClass('cs-full');
			$(this).unbind('click');

			$(this).find('.cs-hidden').show();

			// $this.detach();

			var $prev = $this.prevAll('.cs-full');

			if($prev.length > 0)
				$prev.first().after($this);
			else
				$this.parent().prepend($this);

			var $siblings = $this.siblings('.cs-not-full'),
				sibl_width = 100/$siblings.length;

			$siblings.each(function(index,element){
				if($siblings.length === 1) {
					$(element).removeClass('cs-not-full')
					$(element).addClass('cs-full');
					$(element).children('.cs-hidden').removeClass('cs-hidden');
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
	};

})(jQuery);
