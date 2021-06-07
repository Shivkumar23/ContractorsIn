(function ($) {
    $(document).ready(function () {
        // Preloader
        $(window).on("load", function () {
            $(".Preloader").addClass("loaded");
        });

        // Header
        var fixed_top = $(".header");
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                fixed_top.addClass(" sticky");
            } else {
                fixed_top.removeClass(" sticky");
            }
        });

        $(".fa-search").click(function () {
            $(".togglesearch").toggle();
            $(".searcht[type='text']").focus();
        });

        //
        $('.btn-link[aria-expanded="true"]').closest(".accordion-item").addClass("active");
        $(".collapse").on("show.bs.collapse", function () {
            $(this).closest(".accordion-item").addClass("active");
        });

        $(".collapse").on("hidden.bs.collapse", function () {
            $(this).closest(".accordion-item").removeClass("active");
        });


        // 
        $('.list-button').on('click', function () {
            $(this).parent().toggleClass('assigned-box-open');
            $(this).parent().siblings().removeClass('assigned-box-open');
        });
        $(document).click(function (e) {
            var container = $(".assigned-to-contractor ul");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.assigned-to-contractor li').removeClass('assigned-box-open');
            }
        });

        // 
        // Custom Slider
        $(document).ready(function () {
            $(".custom-slider").owlCarousel({
                loop: true,
                margin: 15,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2000,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3,
                    },
                },
            });
            $(".custom-slider .owl-prev").html('<i class="fa fa-chevron-left"></i>');
            $(".custom-slider .owl-next").html('<i class="fa fa-chevron-right"></i>');
        });
        //

        $("#testimonial").owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000,
        });
    });
})(jQuery);


AOS.init();