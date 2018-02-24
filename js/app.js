

$(document).ready(function () {

  $('.blog').click(function () {
    $('#content').load('./pages/post.html');

      if ($('#content').is(":hidden")) {
        $('#content').slideDown();
      }
      else {
        $('#content').slideUp();
        $('.about-content').slideDown();
      }
});
  $('.about').click(function () {
    $('#content').load('./pages/about.html');
    $('.about-content').slideToggle();

  })

})
