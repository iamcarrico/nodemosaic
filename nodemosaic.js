jQuery(document).ready(function($) {
	
	var tile_options = {
		width: 100,
		height: 100,
		start_col: 500,
		start_row: 500,
		range_col: [1, 1000],
		range_row: [1, 1000],
		
		oncreate: function(tile, col, row) {
			$.getJSON(
				('/nodemosaic/tile/' + col + '/' + row),
				function(data){
					$(tile).append(data);
				}
			);
		}
	};
	
	$.infinitedrag("#nodemosaic-wall", {}, tile_options);
});