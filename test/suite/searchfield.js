(function($){
  test('Basics', function(){
    ok($.fn.inputSearch, "Plugin exists");
    ok($.fn.inputSearch.defaults, "Defaults exists");

    throws(function(){
      new $.fn.inputSearch.Constructor();
    }, TypeError, "Constructor can't work if not binded to an element.");
  });

  test('Activating Text Element', function(){
    var $input = $('.searchfield-as-textfield:first');
    var handler = $input.data('input-search');
    var $cancelButton;

    ok(!handler && !$('.search-cancel-button').length, "Handler does not exist yet");

    $input.focus();
    $cancelButton = (handler = $input.data('input-search')) && handler.$cancelButton;

    ok($input.next().get(0) === $cancelButton.get(0), "Cancel button created");
  });

  test('Field Content and Cancel Button Behavior', function(){
    var $input = $('.searchfield-as-textfield:first');
    var $cancelButton;

    $input.focus();
    $cancelButton = $input.data('input-search').$cancelButton;

    equal($cancelButton.css('visibility'), 'hidden', "Cancel button is not visible yet");

    $input.val('Cheese').trigger('keyup');

    equal($cancelButton.css('visibility'), 'visible', "Cancel button is now visible");

    $input.val('').trigger('keyup');

    ok($cancelButton.hasClass('hidden'), "Cancel button is no more visible");
  });

})(jQuery);
