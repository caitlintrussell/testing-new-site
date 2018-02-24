
$(document).ready(function () {

  $('.blog').click(function () {
      $('#content').load('./pages/post.html');
      $('.home-img').hide();
  });

  $('.about').click(function () {
    $('.blog-content').hide()
    $('#content').load('./pages/about.html');
    $('.home-img').hide();
});


})
