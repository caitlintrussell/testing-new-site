

$(document).ready(function () {

  $('.blog').click(function () {
    $('#content').load('./posts/post.html');
});
//   $('.blog').on('click', function () {
//     console.log('hello world')
//     $('#content').toggle();
//   })
})
