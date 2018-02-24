
$(document).ready(function () {

  $('.blog').click(function () {
      $('.blog-content').load('./pages/post.html');
      $('.home-img').hide();
      $('.blog').off('click');
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

  $('.about').click(function () {
    $('.about-content').load('./pages/about.html');
    $('.home-img').hide();
    $('.about').off('click');
});

$('.about').click(function () {
  if ($('.about-content').is(':hidden')) {
    $('.about-content').slideDown();
  }
  else {
    $('.about-content').slideUp();
    $('.home-img').show();
  }
});

})
