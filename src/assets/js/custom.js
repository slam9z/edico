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


    //count Down Date

    var countDownDate = new Date("Jan 15, 2018 00:00:00 UTC+8").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#mu-event-counter').html('<span class="mu-event-counter-block"><span>' + days + '</span> Days</span> ' +
            '<span class="mu-event-counter-block"><span>' + hours + '</span> Hours</span> ' +
            '<span class="mu-event-counter-block"><span>' + minutes + '</span> Mins</span> ' +
            '<span class="mu-event-counter-block"><span>' + seconds + '</span> Secs</span>');

    }, 1000);
    // end

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

    $("#login-button").click(function(event) {
        event.preventDefault();

        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });

    //progress bar
    var x = setInterval(function() {
    // utility methods

    const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
    const weiToEther = wei => wei / 10**18;
    const totalEther = 750000000/8500;
    const percent = ether => (ether / totalEther * 100).toFixed(1);

    //const targetApi = 'https://ropsten.infura.io/Kgx1nx3BuoZLPDNH2RkK';
    const targetApi = 'https://mainnet.infura.io/Kgx1nx3BuoZLPDNH2RkK';
    const contractAddress = '0xCe53a179047ebed80261689367c093C90A94cC08';
    //'0x01760d015473A4Fd33466F00f9A94405376565FD';

    ///// getting contract
    const web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
    const totalRaised = web3.fromWei(web3.eth.getBalance(contractAddress),"ether");

    /// read and display values
    //writeValue('contractAddress', contractAddress);
    writeValue('totalRaised', 'Raised: ' + percent(totalRaised) + '%');
    let etherPercent = percent(totalRaised) + '%';
    //writeValue('totalRaisedPercent', etherPercent);

    $('#progress-solid-line').css('width', etherPercent);
    //$('#progress').text((progress * 100).toFixed(1) + '%').css('left', progress * 338 - 30 + 'px');
    //$('#eth-amount').text(res.eth);
    },
    1000);


  //block
  $("#tokenBtn").click(function(event){
      $.ajax({
        url: "https://ipapi.co/json",
        type: 'GET',
        success: function(json)
        {
           console.log("My country is: " + json.country);
           if(json.country == "US1") {
              alert("We detect your IP belongs to US citizen or resident, whose legislation conflicts with joining the current sales event. We apologize for the inconvenience ");
           } else {
//              this.router.navigate(['register']);
                window.open("/register","_self")
           }
        },
        error: function(err)
        {
         console.log("Request failed, error= " + err);
        }
      });
  })


})(jQuery);
