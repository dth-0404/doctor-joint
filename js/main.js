$(".navbar-bar").click(function () {
    $(".navbar-content").addClass("show-navbar"), $(".navbar-content").removeClass("hide-navbar")
}), $(".navbar-close").click(function () {
    $(".navbar-content").removeClass("show-navbar"), $(".navbar-content").addClass("hide-navbar")
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});

$(".btn-blog").click(function () {
    $(".btn-blog").removeClass("active-btn"), $(this).addClass("active-btn");
    var t = $(this).attr("data-sidebar");
    $(".single-sidebar-widget").hide(), $("html").find(".single-sidebar-widget#" + t).show()
}), $(".list-number-blog li").each(function () {
    $(this).click(function () {
        $(".list-number-blog li").removeClass("active"), $(this).addClass("active")
    })
});


var btn = $("#button_scroll_top");
$(window).scroll(function () {
    $(window).scrollTop() > 500 ? btn.addClass("show") : btn.removeClass("show")
}), btn.on("click", function (t) {
    t.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
});

function validate(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9()]|\+/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};
$(document).ready(function () {
    $('.see-more').click(function () {
        $('html, body').animate({
            scrollTop: $(".form-order").offset().top
        }, 3500)
    })
});