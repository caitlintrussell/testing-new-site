
$(document).ready(function () {

  $('.blog').click(function () {
      $('blog-content').load('./pages/post.html');
      $('.home-img').hide();
      $('.blog').unbind('click');
  });

  $('.blog').click(function () {
    if ($('.blog-content').is(':hidden')) {
      $('.blog-content').slideDown();
    }
    else {
      $('.blog-content').slideUp();
      $('.home-img').show();
    }
  });

})
