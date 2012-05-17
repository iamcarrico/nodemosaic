(function($) {

function buildTile (data, tile, col, row) {

	// Some messy variables we'll use later:
	contentOpen = '<div class="_content">';
	contentClose = '</div>';
	
	if ( typeof(data) == "string") {
		switch (data) {
			case "no_result":
				$(tile)
					.addClass('tile-empty')
					.append(
						contentOpen +
						'<a href="/node/add/mosaic-tile?edit[field_tilecol][und][0][value]=' + col +
						'&edit[field_tilerow][und][0][value]=' + row + '">' +
						'ADD' +
						'</a>' + 
						contentClose
					)
					.fadeIn();
				break;
				
			case "range_error":
				$(tile).addClass('tile-range').fadeIn();
				break;
			
			case "pending":
				$(tile)
					.addClass('tile-pending')
					.append(contentOpen + '&nbsp;' + contentClose)
					.fadeIn();
				break;
		}
			
	} else if ( typeof(data) == "object" ) {
		$(tile)
			.append(
				contentOpen +
				'<a href="' + data['path'] + '">' +
				'</a>' + 
				contentClose
			)
		tileImage =
			$('<img />', {src: data['image'],alt: data['title']})
			.one('load', function () { $(this).closest('._tile').fadeIn(); })
			.appendTo( $(tile).children('div').children('a') );
		/*tileImage = (
			'<img src="' +
			data['image'] +
			'" alt="' +
			data['title'] + 
			'" />'
		);*/
	}
}

nodeMosaic = false; /* Delare in global scope for testing */

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
	
	if ( $('body').hasClass('node-type-mosaic-tile') ) {
		tile_options['start_col'] = parseInt($('#field_tilecol').text());
		tile_options['start_row'] = parseInt($('#field_tilerow').text());
	}
	nodeMosaic = $.infinitedrag("#nodemosaic-wall", {}, tile_options);
});

})(jQuery);