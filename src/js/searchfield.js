(function($, document, undefined){
  "use strict";

  function Searchfield($el, options){
    this.$el = $el;
    this.options = options;

    this.$cancelButton = null;

    options.showCancel && this.setupCancelButton();
  }

  Searchfield.prototype = {
    /**
     * Focusing a search field
     */
    focus: function focus(){
      this.$cancelButton && this.showCancelButton();
    },
    /**
     * Leaving a search field
     */
    blur: function blur(){


    },
    clear: function clear(){
      this.$el.val('');

      this.options.focusAfterClear && this.$el.focus();
      this.hideCancelButton();
    },
    setupCancelButton: function setupCancelButton(){
      this.$cancelButton = $( document.createElement('div') );

      this.$cancelButton
        .addClass('search-cancel-button')
        .css('visibility', 'hidden')
        .on('click', $.proxy(this.clear, this) )
        .insertAfter(this.$el);
    },
    repositionCancelButton: function repositionCancelButton(){
      var position = this.$el.position();

      position.left += this.$el.outerWidth() - this.$cancelButton.width();
      position.top += this.$cancelButton.innerHeight() / 2;

      this.$cancelButton.offset(position);
    },
    hideCancelButton: function hideCancelButton(){
      this.$cancelButton.addClass('hidden');
    },
    showCancelButton: function showCancelButton(){
      this.repositionCancelButton();

      this.$cancelButton.css('visibility', '').removeClass('hidden');
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
    showCancel: true,
    focusAfterClear: true
  };

  /**
   * Keep an eye on the Object for testing purpose
   *
   * @type {Searchfield}
   */
  $.fn.inputSearch.Constructor = Searchfield;

  /**
   * Default Event Listeners
   */
  $(document)
    .on('focus', 'input[type="search"].input-search', function(){
      $(this).inputSearch('focus');
    })
    .on('blur', 'input[type="search"].input-search', function(){
      $(this).inputSearch('blur');
    })
})(jQuery, document);