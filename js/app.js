

$(document).ready(function () {

  var blogClick = false;

  if (!blogClick) {
    $('.blog').click(function () {
        $('#content').load('./pages/post.html');
        blogClick = true;
        $('#content').unbind('click')
    });
  }
  else {
    $('.blog').click(function () {
      ('.blog-content').slideToggle();
    });
  }


})
