(function ($) {

  Drupal.behaviors.gsbAutoUploadFile = {
    attach: function (context) {
      $(context).find('input[type="file"]').once('gsb-auto-upload-file').change(function (event) {
        // Perform auto-upload only if we don't have validation errors, otherwise an error will appear and immediately disappear.
        if ($(event.target).closest('.form-managed-file').find('.file-upload-js-error').length == 0) {
          // Trigger upload button click.
          $(event.target)
            .closest('.form-managed-file')
            .find('.form-submit')
            .trigger('mousedown');
        }
      });
    }
  };

}(jQuery));
