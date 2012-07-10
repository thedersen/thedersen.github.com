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

  $('a').on('click',function(e){
    var url = $(this).attr('href'), newTab = false;
    if (e.currentTarget.host != window.location.host) {
      _gat._getTrackerByName()._trackEvent('Outbound Links', e.currentTarget.host, url, 1);
      if (e.metaKey || e.ctrlKey) {
        newTab = true;
      }
      if (!newTab) {
        e.preventDefault();
        setTimeout('document.location = "' + url + '"', 100);
      }
    }
  });
});