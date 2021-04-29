function addFavorite(idName) {



    if (document.getElementById(idName).classList.contains('favorite')) {

        document.getElementById(idName).classList.remove('favorite');
        document.getElementById(idName).classList.add('botao');




    } else {
        document.getElementById(idName).classList.remove('botao');
        document.getElementById(idName).classList.add('favorite');
    }

}
(function($) {
    "use strict"; // Start of use strict


    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Carregando imagem #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">A imagem #%curr%</a> não pode ser carregada.'
        }
    });

})(jQuery); // End of use strict