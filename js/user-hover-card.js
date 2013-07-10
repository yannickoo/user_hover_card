(function ($) {

  Drupal.behaviors.namespace = {
    attach: function (context, settings) {
      // Load hover card for all user profile links.
      $('.username').hover(function() {
        var that = $(this);
        var url = that.attr('href') + '/card';
        // Fire AJAX request and display the content in a tooltip.
        $.ajax({
          url: url,
          success: function(data) {
            that.tipsy({
              title: function() {
                return data;
              },
              opacity: 1,
              html: true,
              trigger: 'manual'
            }).tipsy('show');
          }
        });
      }, function() {
        // Only hide the Tipsy if it is not hovered.
        if (!$('.tipsy:hover').length) {
          var that = $(this);
          that.tipsy('hide');
        }
      });

      // Remove Tipsy when leaved.
      $('.tipsy').live('mouseleave', function() {
        $(this).remove();
      });
    }
  };

})(jQuery);
