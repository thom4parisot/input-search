(function($, document, undefined){
  "use strict";

  function Searchfield($el, options){
    this.$el = $el;
    this.options = options;

    this.$cancelButton = null;

    options.showCancel && this.setupCancelButton();
  }

  Searchfield.prototype = {
    focus: function focus(){
      this.cancelButton && this.showCancelButton();
    },
    setupCancelButton: function setupCancelButton(){
      var position;

      this.$cancelButton = $( document.createElement('div') );

      this.$cancelButton
        .addClass('search-cancel-button')
        .css('visibility', 'hidden')
        .insertAfter(this.$el);

      position = this.$el.position();
      position.left += this.$el.outerWidth() - this.$cancelButton.width();
      position.top += this.$cancelButton.innerHeight() / 2;

      this.$cancelButton
        .offset(position)
        .css('visibility', '');
    },
    showCancelButton: function showCancelButton(){

    }
  };

  /**
   *
   * @param {Object|String|undefined=} option
   */
  $.fn.inputSearch = function inputSearch(option){
    return $(this).each(function(){
      var $input = $(this);
      var data = $input.data('input-search');
      var options = $.extend({}, $.fn.inputSearch.defaults, typeof option === 'object' && option);

      if (!data){
        $input.data('input-search', (data = new Searchfield($input, options)));
      }

      if (typeof option === 'string'){
        data[option]();
      }
    });
  };

  /**
   * Plugin Defaults
   *
   * @type {{showCancel: boolean}}
   */
  $.fn.inputSearch.defaults = {
    showCancel: true
  };

  $(document).on('focus', 'input[type="search"].input-search', function(){
    $(this).inputSearch('focus');
  });
})(jQuery, document);