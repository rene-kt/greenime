// get favorites from local storage or empty array
function addFavorite(idName) {



    if (document.getElementById(idName).classList.contains('favorite')) {

        document.getElementById(idName).classList.remove('favorite');
        document.getElementById(idName).classList.add('botao');




    } else {
        document.getElementById(idName).classList.remove('botao');
        document.getElementById(idName).classList.add('favorite');
    }

}

function returnFavorites() {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // add class 'fav' to each favorite
    favorites.forEach(function(favorite) {
        document.getElementById(favorite).className = 'fav';
    });
}

function addAndRemoveFavorites(id) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // register click event listener
    index = favorites.indexOf(id);
    // return if target doesn't have an id (shouldn't happen)
    if (!id) return;
    // item is not favorite
    if (index == -1) {
        favorites.push(id);
        // item is already favorite
    } else {
        favorites.splice(index, 1);
    }
    // store array in local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
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