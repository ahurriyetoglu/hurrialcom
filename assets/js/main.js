// eslint-disable-next-line no-unused-vars
(function (window, document, $, undefined) {

  function initialize () {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
      $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
          width: itemWidth
        }, 800);
      });
    });
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
  }

  $(document).ready(initialize);

})(window, window.document, window.jQuery);
