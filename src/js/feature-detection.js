(function(M){
  // Pseudo-element is styled if understood by the browser
  M.testStyles('#modernizr, x::-webkit-search-cancel-button{ width: 666px }', function(el){
    M.addTest('search-cancel', el.offsetWidth === 666);
  });
})(Modernizr);