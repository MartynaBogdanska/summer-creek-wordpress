// Sticky Main Navigaion

jQuery(function() {
    /* Selecting the navigation */
    var $nav = jQuery("#site-navbar");
    /* Determing navigation Size */
    var $navSize = $nav.outerHeight();
    /* Detecting scroll event */
    jQuery(window).scroll(function() {
        /* Determing the position of the scroll */
        var $scrollPos = jQuery(window).scrollTop();
        /* If it's bigger thant the navigation size */
        if ($scrollPos >= $navSize + 300) {
            /* Adding the class scrolled  */
            $nav.addClass("scrolled");
            /* If it's not, then */
        } else {
            /* Removing the class */
            $nav.removeClass("scrolled");
        }
    });
});

// Fixed main mobile navigation on homepage

jQuery(function() {
    /* Selecting the navigation */
    var $nav = jQuery("#site-navbar");
    var $navButton = jQuery("#toogle-button");

    $navButton.on("click", function() {
        $nav.toggleClass('bg-nav');
    });
});


// Smooth Scroll

// Select all links with hashes
jQuery('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                jQuery('html, body').animate({
                    scrollTop: target.offset().top //- 120
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = jQuery(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Spy function turned on

jQuery('body').scrollspy({ target: '#navbar-2-level' });


// Make 2nd level mobile nav dropdown working

jQuery("#navbar-2-level-mobile select").change(function() {
    window.location = jQuery(this).find("option:selected").val();
});

// Multi-layered parallax scrolling effect on Homepage only

jQuery(function() {

    if (window.location.pathname == '/') {
        window.addEventListener('scroll', scrollFunc);

        function scrollFunc() {
            var windowScroll = this.scrollY;
            var $background = document.getElementsByClassName('parallax-back-el')[0];
            // $background.style.transform = 'translateY(-' + windowScroll / 5000 + '%)';
            $background.style.transform = 'translateY(-' + windowScroll / 1000 + '%)';

            var $heroText = document.getElementsByClassName('parallax-main-el')[0];
            // $heroText.style.transform = 'translateY(' + windowScroll / 5 + '%)';
            $heroText.style.transform = 'translateY(' + windowScroll / 2 + '%)';

            var $foreground = document.getElementsByClassName('parallax-fore-el')[0];
            // $foreground.style.transform = 'translateY(-' + windowScroll / 100 + '%)';
            $foreground.style.transform = 'translateY(-' + windowScroll / 45 + '%)';

        };
    }
});

// Preloader on Homepage only

jQuery(function() {
    if (window.location.pathname == '/') {
        // Index (home) page
        jQuery(window).on('load', function() {
            jQuery('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
            setTimeout(function() {
                jQuery('#preload-content').fadeOut(400, function() {
                    jQuery('#preload').fadeOut(800);
                    setTimeout(function() {
                        jQuery('.fade-in').each(function(index) {
                            jQuery(this).delay(400 * index).animate({ top: 0, opacity: 1 }, 800);
                        });
                    }, 800);
                });
            }, 400);
        });
    };
});

// Weather section - tabs enable

jQuery('#months-weather a').on('click', function(e) {
    e.preventDefault()
    jQuery(this).tab('show')
})

// Weather section - dropdown on mobile 

jQuery('#months-weather-mobile a').on('click', function(e) {
    e.preventDefault()
    jQuery('a.active').removeClass('active');
    jQuery(this).tab('show')
})