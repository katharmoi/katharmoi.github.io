$(document).ready(function () {
    //Sticky nav
    /*
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
    });

    var maxHeight = 0;
    for (i = 0; i < $(".plan-img").length; i++) {
        if ($(".plan-img").eq(i)) {
            var currentHeight = $(".plan-img").eq(i).height();
            if (currentHeight >= maxHeight) {
                maxHeight = currentHeight;
            }
        } else {
            break;
        }
    }
    $(".plan-img").height(maxHeight);
   */
    //Scroll buttons
    $('.js--scroll-to-form').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--form').offset().top
        }, 1000);
    });

    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-portfolio').offset().top
        }, 1000);
    });

    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    /*
     $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated pulse');
    },{
        offset : '50%'
    });
    */
});
