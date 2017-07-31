var switchClick = function(e) {
	$(this).toggleClass('active');
};

(function($) {	
	$.fn.materialSwitch = function(options) {		
		this.each(function() {
			$(this).click(switchClick);
			
			$('<div class="bar" />').appendTo($(this));
			$('<div class="thumb-container" />').append(
				$('<div class="thumb" />').append(
					$('<div class="ripple"/>')
				)
			).appendTo($(this));
		});
		return this;
	};
	
	$('.material-switch').materialSwitch();

}(jQuery));