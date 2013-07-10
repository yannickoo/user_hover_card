(function ($) {

  Drupal.behaviors.namespace = {
    attach: function (context, settings) {
      // Load hover card for all user profile links.
      $('.username').hover(function() {
        var that = $(this);
        var url = that.attr('href');
        // Fire AJAX request and display the content in a tooltip.
        $.ajax({
          url: url,
          success: function(data) {
            that.tipsy({title: function() { return data }, html: true });
          }
        });
      });
    }
  };

})(jQuery);
