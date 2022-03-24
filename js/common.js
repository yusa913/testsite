/*Slider*/
$(function() {
  $('.slick-image').slick({
     dots: true, 
     autoplay: true,
     autoplaySpeed: 3000,
     pauseOnHover: true,

  });    
});
/*TOPへ戻るボタン*/
$(document).ready(function () {
    $("#page__top").hide();　
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#page__top").fadeIn("fast"); 
        } else {
            $("#page__top").fadeOut("fast");　
        }
        scrollHeight = $(document).height(); 
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        footHeight = $("footer").innerHeight(); 
        if (scrollHeight - scrollPosition <= footHeight) { 
            $("#page__top").css({
                "position": "absolute", 
            });
        } else { 
            $("#page__top").css({
                "position": "fixed", 
            });
        }
    });
    $('#page__top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);　
        return false;
    });
});
