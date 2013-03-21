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
    focusin: function focusin(){
      this.maybeHideCancelButton();
    },
    keyup: function keyup(){
      this.maybeHideCancelButton();
    },
    /**
     * Leaving a search field
     */
    focusout: function focusout(){
      this.maybeHideCancelButton();
    },
    /**
     * Clear the field
     */
    clear: function clear(){
      this.$el.val('');

      this.options.focusAfterClear && this.$el.focus();
      this.hideCancelButton();
    },
    /**
     * Creates a Cancel Button and attach events to it
     */
    setupCancelButton: function setupCancelButton(){
      this.$cancelButton = $( document.createElement('div') );

      this.$cancelButton
        .addClass('search-cancel-button')
        .css('visibility', 'hidden')
        .on('click', $.proxy(this.clear, this) )
        .insertAfter(this.$el);
    },
    /**
     * Positions the Cancel Button to where it belongs
     */
    repositionCancelButton: function repositionCancelButton(){
      var position = this.$el.position();

      position.left += this.$el.outerWidth() - this.$cancelButton.width();

      //simulating top=50% + margin-top=-halfsize for middle vertical align
      position.top += (this.$el.outerHeight() + (parseInt(this.$el.css('border-top-width') || 0, 10))) / 2;
      position.top -= this.$cancelButton.height() / 2;

      this.$cancelButton.offset(position);
    },
    /**
     * Hide the Cancel Button if there is any reason of that
     * Aka field empty
     */
    maybeHideCancelButton: function maybeHideCancelButton(){
      var isVisible = !this.$cancelButton.hasClass('hidden');

      this.$el.val().trim().length === 0
        ? (isVisible && this.hideCancelButton())
        : (!isVisible && this.showCancelButton());
    },
    /**
     * Hide the Cancel Button
     */
    hideCancelButton: function hideCancelButton(){
      this.$cancelButton.addClass('hidden');
    },
    /**
     * Show the Cancel Button
     */
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
    .on('focus blur keyup', 'input[type="search"].input-search', function(event){
      $(this).inputSearch(event.type);
    });
})(jQuery, document);