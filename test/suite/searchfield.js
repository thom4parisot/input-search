(function($){
  test('Basics', function(){
    ok($.fn.inputSearch, "Plugin exists");
    ok($.fn.inputSearch.defaults, "Defaults exists");
    throws(function(){
      new $.fn.inputSearch.Constructor();
    }, TypeError, "Constructor can't work if not binded to an element.");
  });
})(jQuery);
