/**
 * Reform the masonry
 *
 * Rebuild the masonry grid on every resize and load event after making sure 
 * all the images in the grid are completely loaded.
 */
["resize", "load"].forEach(function(event) {
  // Follow below steps every time the window is loaded or resized
  window.addEventListener(event, function() {
    // Check if all the images finished loading
    imagesLoaded( document.querySelector('.masonry'), function() {
      /*
       * A maonsry grid with 8px gutter, with 3 columns on desktop,
       * 2 on tablet, and 1 column on mobile devices.
       */
      masonry(".masonry", ".masonry-brick", 8, 3, 2, 1);
    });
});