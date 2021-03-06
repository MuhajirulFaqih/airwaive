(function ($) {
    "use strict";
    // Toggler navbar
    $('.nav-toggle').click(function () {
        $('.nav').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })
    $('.nav-close').click(function () {
        $('.nav').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })
    $('.nav-overlay').click(function () {
        $('.nav').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })
    $('.nav a').click(function () {
        $('.nav').toggleClass('active')
        $('.nav-overlay').toggleClass('active')
    })

    AOS.init({ offset: 0, duration: 1000, delay: 100 });

})(window.jQuery);

$("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target
                    .offset()
                    .top - 80
            }, 200, 'swing', function () {
                window.location.hash = '';
            });
            return false;
        }
    }
});

$(window).scroll(function () {
    onScroll();
    if ($(this).scrollTop() > ($("#home").height() - 54)) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function() {
      var currLink = $(this);

      try {
        var refElement = $(currLink.attr("href"));
        if (
          (refElement.position().top - 100) <= scrollPos &&
          (refElement.position().top - 100) + refElement.height() > scrollPos
        ) {
          $(".nav li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      } catch (e) {
        // Ignore href='javascript:;'
      }
    });
}

var owlSlider = $('#partners-carousel');
owlSlider.owlCarousel({
    navigation: true,
    nav: true,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    navText : [ '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.4"> <path d="M25 30L15 20L25 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg> ', '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <g opacity="0.4"> <path d="M15 30L25 20L15 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg> '],
    center: false,
    responsiveClass: true,
    margin: 0,
    items: 2,
    smartSpeed: 300,
    responsive: {
        480: {
            items: 2,
        },
        720: {
            items: 3,
        },
        992: {
            slideBy: 4,
            items: 4
        }
    }
});


var allTeam = $(".team-person .bg-box");
var elemTeam = "";
for (let index = 0; index < allTeam.length; index++) {
    var elemHtml = $(allTeam[index]).html()
    $('#team-carousel').append(`<div class="col-lg-4">
        <div class="bg-box px-4 py-5 py-lg-4 py-xxl-5 rounded-24 rounded-lg-40 mb-5 text-center text-lg-start">
            ${elemHtml}
        </div>
    </div>`);
}

var owlSlider = $('#team-carousel');
owlSlider.owlCarousel({
    navigation: false,
    nav: false,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: false,
    center: true,
    responsiveClass: true,
    margin: 20,
    stagePadding: 50,
    items: 1,
    smartSpeed: 300,
    responsive: {
        480: {
            items: 2,
            center: false,
        },
        720: {
            items: 3,
            center: false,
        },
        992: {
            slideBy: 4,
            items: 4,
            center: false,
        }
    }
});