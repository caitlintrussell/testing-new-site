
$(document).ready(function () {
  $('.blog-content').load('./pages/post.html');
  #('.about-content').load('./pages/about.html')


  var blogClicks = false;
  $('.blog').click(function () {
    if (!blogClicks) {
      $('.home-img').slideUp();
      $('.about-content').slideUp();
      $('.blog-content').slideDown();
      blogClicks = true;
    }
    else {
      $('.blog-content').slideUp();
      $('.home-img').slideDown();
      blogClicks = false;
    }

  });


var aboutClicks = false;
  $('.about').click(function () {
    if (!aboutClicks) {
      $('.home-img').hide();
      $('.blog-content').hide();
      $('.about-content').slideDown();
      aboutClicks = true;
    }
    else {
      $('.about-content').slideUp();
      $('.home-img').slideDown();
      aboutClicks = false;
    }

});





})
