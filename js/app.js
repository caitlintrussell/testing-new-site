
$(document).ready(function () {
  $('.blog-content').load('./pages/post.html');
  $('.about-content').load('./pages/about.html')

  $('.blog').click(function () {
    $('#plant-left').show();
    $('#plant-right').show();
    $('.home-img').hide();
    $('.about-content').hide();
    $('.blog-content').show();

  });

  $('.about').click(function () {
    $('.home-img').hide();
    $('#plant-left').show();
    $('#plant-right').show();
    $('.blog-content').hide();
    $('.about-content').show();
  });

})
