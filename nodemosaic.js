jQuery(document).ready(function($) {
	
	var tile_options = {
		width: 100,
		height: 100,
		start_col: 500,
		start_row: 500,
		range_col: [1, 1000],
		range_row: [1, 1000],
		
		oncreate: function($element, col, row) {
			$('<div class="_content"></div>').
				html('<span>' + col + 'x' + row + '</span><a href="#' + col + 'x' + row + '">&rarr;</a>').
				appendTo($element)/*.
				click(function(e) {
					alert(col + 'x' + row);
				})*/;
		}
	};
	
	jQuery.infinitedrag("#nodemosaic-wall", {}, tile_options);
});