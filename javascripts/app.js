jQuery(function($){
  $('#posts').easyPaginate({
    step: 5,
    numeric: false,
    all: true,
    delay: 50,
    updateHash: true,
    controls: 'postPagination'
  });
  $('#talks').easyPaginate({
    step: 5,
    numeric: false,
    all: true,
    delay: 50,
    updateHash: true,
    controls: 'talkPagination'
  });
  $('#paginate').easyPaginate({
    step: 1,
    updateHash: false
  });

  // $(window).bind('hashchange', function() {
  //   var hash = window.location.hash.split('/');
  //   $(hash[0]).easyPaginate('show', hash[1]);
  // });
});