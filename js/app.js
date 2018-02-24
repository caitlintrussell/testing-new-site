

$(document).ready(function () {

  $('.blog').click(function () {
    $('#content').load('./posts/post.html');
    $('#content').toggle();
});

})
