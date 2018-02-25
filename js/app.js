
$(document).ready(function () {
  $('.blog-content').load('./pages/post.html');
  $('.about-content').load('./pages/about.html')

  var blogClicks = false;
  $('.blog').click(function () {
    if (!blogClicks) {
      $('.home-img').hide();
      $('.about-content').hide();
      $('.blog-content').show();
      blogClicks = true;
    }

  });


var aboutClicks = false;
  $('.about').click(function () {
    if (!aboutClicks) {
      $('.home-img').hide();
      $('.blog-content').hide();
      $('.about-content').show();
      aboutClicks = true;
    }

});

})
