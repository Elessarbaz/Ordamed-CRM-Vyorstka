$( window ).on( "load", function() {
  // external js: packery.pkgd.js, draggabilly.pkgd.js

  var $grid = $('.grid').packery({
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });

// make all grid-items draggable
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    // bind drag events to Packery
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });

});