(function($) {

function buildTile (data, tile, col, row) {

	// Some messy variables we'll use later:
	contentOpen = '<div class="_content">';
	contentClose = '</div>';
	linkOpen = ('<a href="#' + col + '/' + row +'">');
	linkClose = '</a>';
	
	if ( typeof(data) == "string") {
		switch (data) {
			case "no_result":
				$(tile)
					.addClass('tile-empty')
					.append(
						contentOpen +
						linkOpen +
						'?' +
						linkClose + 
						contentClose
					);
				break;
				
			case "range_error":
				$(tile).addClass('tile-range');
				break;
		}
			
	} else if ( typeof(data) == "object" ) {
		tileImage = (
			'<img src="' +
			data['image'] +
			'" alt="' +
			data['title'] + 
			'" />'
		);
		$(tile)
			.append(
				contentOpen +
				linkOpen +
				tileImage +
				linkClose + 
				contentClose
			)
			.children('img')
			.fadeIn();
	}
}

jQuery(document).ready(function() {
	
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
					buildTile(data, tile, col, row);
				}
			);
		}
	};
	
	$.infinitedrag("#nodemosaic-wall", {}, tile_options);
});

})(jQuery);