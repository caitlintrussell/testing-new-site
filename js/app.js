
$(document).ready(function () {

  var blogClick = false;

  if (!blogClick) {
    $('.blog').click(function () {
        $('blog-content').load('./pages/post.html');
        blogClick = true;
        $('.home-img').hide();
    });
  }
  else if ($('.blog-content').is(':hidden')) {
    $('.blog').click(function () {
      ('.blog-content').slideDown();
    });
  }
  else {
    $('.blog').click(function () {
      ('.blog-content').slideUp();
      $('.home-img').show();
    });
  }

})
