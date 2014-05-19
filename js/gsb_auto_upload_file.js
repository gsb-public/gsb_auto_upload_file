(function ($) {

  Drupal.behaviors.gsbAutoUploadFile = {
    attach: function (context) {
      $(context).find('input[type="file"]').once('gsb-auto-upload-file').change(function (event) {
        $(event.target)
          .closest('.form-managed-file')
          .find('.form-submit')
          .trigger('mousedown');
      });
    }
  };

}(jQuery));
