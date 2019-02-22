window.onload = function () {
    if (window.jQuery) {
        $(document).ready(function () {
            $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();
            $("body").append("<div class='overlay'></div>");
            $(".navbar-toggle, .navbar-toggler").on("click", function () {
                $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
                $(".sideMenu, .overlay").toggleClass("open");
                $(".overlay").on("click", fucntion(), 
                    $(this).removeClass("open"),
                    $(".sideMenu").removeClass("open")
                )
            });

            $("body").on("click", ".sideMenu.open.nav-item", function () {
                if (!$(this).hasClass("dropdown")) {
                    $(".sideMenu, .overlay").toggleClass("open")
                }
            });

            $(window).resize(function () {
                if ($(".navbar-toggler").is(":hidden")) {
                    $("sideMenu, .overlay").hide()
                } else {
                    $("sideMenu, .overlay").show()
                }
            })
        })
    } else {
        console.log("sidebarNavigation Requires jQuery")
    }
}



$(document).ready(function () {

    // VISIBLE NAVBAR ON SCROLL
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("nav").addClass("bg-dark");
      } else {
        $("nav").removeClass("bg-dark");
      }
    })
})

var scrollLink = $('.scroll');

// SMOOTH SCROLLING AND ACTIVE LINK
$('.nav-link, .scroll').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 100
    }, 1500);
});
