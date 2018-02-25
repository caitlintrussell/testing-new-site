
$(document).ready(function () {
  /* Loads in the content for each page */
  $('.blog-content').load('./pages/post.html');
  $('.about-content').load('./pages/about.html')

  /* click event to show the blog */
  $('.blog').click(function () {
    $('#plant-left').show();
    $('#plant-right').show();
    $('.home-img').hide();
    $('.about-content').hide();
    $('.blog-content').show();

  });
/* click event to show the about page */
  $('.about').click(function () {
    $('.home-img').hide();
    $('#plant-left').show();
    $('#plant-right').show();
    $('.blog-content').hide();
    $('.about-content').show();
  });



})
