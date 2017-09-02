$('.carousel').carousel({
    interval: 5000
})

$(document).on('click', 'a[href^="#"]', function (event) {
        
        event.preventDefault(); 
        var menuHeight = $('#main-nav').height();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
        /* a co jeśli zmienimy sobie wysokość menu w stylach? (google> get height)*/
    });
});
