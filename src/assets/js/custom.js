/**


	Custom JS

	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION
	7. MOBILE MENU CLOSE


**/



(function($) {



    /* ----------------------------------------------------------- */
    /*  1. FIXED MENU
    /* ----------------------------------------------------------- */


    jQuery(window).bind('scroll', function() {
        if ($(window).scrollTop() > 150) {

            $('.mu-navbar').addClass('mu-nav-show');

        } else {

            $('.mu-navbar').removeClass('mu-nav-show');
        }
    });

    jQuery(window).bind('resize', function() {

        if ($('.navbar-toggle').is(":visible") === 'true') {

            $("#bs-example-navbar-collapse-1").find(".mobileView").show()
            $("#bs-example-navbar-collapse-1").find(".normalView").hide()
        } else {
            $("#bs-example-navbar-collapse-1").find(".mobileView").hide()
            $("#bs-example-navbar-collapse-1").find(".normalView").show()
        }

    })

    /* ----------------------------------------------------------- */
    /*  2. EVENT TIME COUNTER
    /* ----------------------------------------------------------- */




    // function getESTOffset() {

    //     return new Date().getTimezoneOffset() - (end.getTimezoneOffset())

    // }

    // function showRemaining() {
    //     var now = new Date();
    //     var distance = end - now - getESTOffset() * _hour;
    //     if (distance < 0) {

    //         clearInterval(timer);
    //         document.getElementById('countdown').innerHTML = 'EXPIRED!';

    //         return;
    //     }
    //     var days = Math.floor(distance / _day);
    //     var hours = Math.floor((distance % _day) / _hour);
    //     var minutes = Math.floor((distance % _hour) / _minute);
    //     var seconds = Math.floor((distance % _minute) / _second);

    //     document.getElementById('countdown').innerHTML = days + ' Days ';
    //     document.getElementById('countdown').innerHTML += hours + ' Hours ';
    //     document.getElementById('countdown').innerHTML += minutes + ' Minutes ';
    //     document.getElementById('countdown').innerHTML += seconds + ' Seconds';
    // }

    // timer = setInterval(showRemaining, 1000);
    var end = new Date('01/01/2018 00:00:00 UTC+8');

    $('#mu-event-counter').countdown({
        util: new Date(end),
        format: 'HMS',
        timezone: +8,
        compact: true,
        description: endTime.toString()
    });
}).on('update.countdown', function(event) {

    //alert(UTCToLocalTimeString(new Date(), 'yyyy/MM/dd hh:mm:ss'));
    var $this = $(this).html(event.strftime('' +
        '<span class="mu-event-counter-block"><span>%D</span> Days</span> ' +
        '<span class="mu-event-counter-block"><span>%H</span> Hours</span> ' +
        '<span class="mu-event-counter-block"><span>%M</span> Mins</span> ' +
        '<span class="mu-event-counter-block"><span>%S</span> Secs</span>'));
});


/* ----------------------------------------------------------- */
/*  3. MENU SMOOTH SCROLLING
/* ----------------------------------------------------------- */

//MENU SCROLLING WITH ACTIVE ITEM SELECTED

// Cache selectors
var lastId,
    topMenu = $(".mu-menu"),
    topMenuHeight = topMenu.outerHeight() + 13,
    // All list items
    menuItems = topMenu.find('a[href^=\\#]'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 22;
    jQuery('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
});

// Bind to scroll
jQuery(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=\\#" + id + "]").parent().addClass("active");
    }
})



/* ----------------------------------------------------------- */
/*  4. VIDEO POPUP
/* ----------------------------------------------------------- */

$('.mu-video-play-btn').on('click', function(event) {

    event.preventDefault();

    $('.mu-video-iframe-area').addClass('mu-video-iframe-display');

});

// when click the close btn

// disappear iframe window

$('.mu-video-close-btn').on('click', function(event) {

    event.preventDefault();

    $('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

});

// stop iframe if it is play while close the iframe window

$('.mu-video-close-btn').click(function() {

    $('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

});

// when click overlay area

$('.mu-video-iframe-area').on('click', function(event) {

    event.preventDefault();

    $('.mu-video-iframe-area').removeClass('mu-video-iframe-display');

});

$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e) {
    e.stopPropagation();
});


/* ----------------------------------------------------------- */
/*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
/* ----------------------------------------------------------- */

$('.mu-speakers-slider').slick({
    slidesToShow: 4,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]
});





/* ----------------------------------------------------------- */
/*  6. BOOTSTRAP ACCORDION
/* ----------------------------------------------------------- */

/* Start for accordion #1*/
$('#accordion .panel-collapse').on('shown.bs.collapse', function() {
    $(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
});

//The reverse of the above on hidden event:

$('#accordion .panel-collapse').on('hidden.bs.collapse', function() {
    $(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
});


/* ----------------------------------------------------------- */
/*  7. MOBILE MENU CLOSE
/* ----------------------------------------------------------- */

jQuery('.mu-menu').on('click', 'li a', function() {
    $('.mu-navbar .in').collapse('hide');
});

jQuery('.wechat').on('click', function() {

    if ($(".wechatCord").css("display") == "none") {
        $('.wechatCord').show()
    } else {
        $('.wechatCord').hide()
    }
});

jQuery('.navbar-toggle').on('click', function() {
$("#bs-example-navbar-collapse-1").find(".mobileView").show()
$("#bs-example-navbar-collapse-1").find(".normalView").hide()
});


})(jQuery);