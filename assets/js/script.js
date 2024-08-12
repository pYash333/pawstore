$(function(){
    // Form submit default event stop
    $('form').submit(function (evt) {
        evt.preventDefault();
    });
    // fixed header on scroll
    $(window).scroll(function(){
        var sticky = $('.header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 10) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    // Responsive Header js
    $(".header .menu-btn").on("click",function(){
        $(".header .header-desktop .main_menu").slideToggle();
    });
    // hamburger menu toggle
    var plus = 'assets/images/bars-solid-icon.svg';
    var minus = 'assets/images/close-icon.svg';
    $('.header .menu-btn').click(function() {
        if ($('.header .menu-btn img').attr('src') === plus) {
          $('.header .menu-btn img').attr('src', minus);
        } else {
          $('.header .menu-btn img').attr('src', plus)
        }
      })    
});