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


  const data = [
    ['1', 500],
    ['2', 450],
    ['3', 400],
    ['4', 300],
    ['5', 250]
  ];
  const options = {
    block: {
      dynamicHeight: true,
      highlight: true,
      fill: {
        type : 'gradient'
      }
    },
    chart: {
      curve : {
        enabled : true
      }
    }
  };

  const chart = new D3Funnel('#funnel');
  chart.draw(data, options);

});