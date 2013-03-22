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


  test('Testing through API', function(){
    var $input = $('.searchfield-as-textfield:first'), $cancelButton;

    $input.inputSearch('maybeHideCancelButton');
    $cancelButton = $input.data('input-search').$cancelButton;

    ok($cancelButton, "Button has been created after focus");
    equal($cancelButton.hasClass('hidden'), true, "Button is still hidden");

    $input.val('Cheese').inputSearch('maybeHideCancelButton');

    equal($cancelButton.hasClass('hidden'), false, "Button is now visible");
    $input.inputSearch('clear');

    equal($input.val(), '', "Input has been cleared");
    equal($cancelButton.hasClass('hidden'), true, "And cancel button has been hidden");

    $input.inputSearch('showCancelButton');
    equal($cancelButton.hasClass('hidden'), false, "Button has been manually set to visible");

    $input.inputSearch('hideCancelButton');
    equal($cancelButton.hasClass('hidden'), true, "Button has been manually set to hidden");
  });


  test('Testing through Event handling', function(){
    var $input = $('.searchfield-as-textfield:first'), $cancelButton;

    $input.focus();
    $cancelButton = $input.data('input-search').$cancelButton;

    ok($cancelButton, "Button has been created after focus");
    equal($cancelButton.hasClass('hidden'), true, "Button is still hidden");

    $input.val('Cheese').trigger('keyup');

    equal($cancelButton.hasClass('hidden'), false, "Button is now visible");
    $cancelButton.trigger('click');

    equal($input.val(), '', "Input has been cleared");
    equal($cancelButton.hasClass('hidden'), true, "And cancel button has been hidden");

    $input.trigger('focus');
    equal($cancelButton.hasClass('hidden'), true, "Cancel button remains hidden");
  });

})(jQuery);
