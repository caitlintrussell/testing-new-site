
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

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 120;

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    console.log(this);
    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $('#header').removeClass('nav-down').addClass('nav-up');
    }
    else if (st + $(window).height() < $(document).height()) {
        $('#header').removeClass('nav-up').addClass('nav-down');
      }
      lastScrollTop = st;
    }


})
