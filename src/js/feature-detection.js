(function(M){
  var supported = false;
  var count = M._prefixes.length, i = 0;
  for (i = 0; i < count; i++){
    if (!supported){
      M.testStyles('#modernizr, x::'+ (M._prefixes[i] || '-') +'search-cancel-button{ width: 666px }', function(el){
        supported = (el.offsetWidth === 666);
      });
    }
  }

  M.addTest('search-cancel', supported);
})(Modernizr);