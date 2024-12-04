$(function() {
    var tab = $('.tabs h3 a');
    tab.on('click', function(event) {
        tab.removeClass('active');
        $(this).addClass('active');
        var tab_content = $(this).attr('href');
        $('div[id$="tab-content"]').removeClass('active');
        $(tab_content).addClass('active');
    });
});

// SLIDESHOW
$(function() {
    $('#slideshow > div:gt(0)').hide();
    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3850);
});

// CUSTOM JQUERY FUNCTION FOR SWAPPING CLASSES
(function($) {
    'use strict';
    $.fn.swapClass = function(remove, add) {
        this.removeClass(remove).addClass(add);
        return this;
    };
}(jQuery));

// SHOW/HIDE PANEL ROUTINE
$(function() {
    $('.agree,.forgot, #toggle-terms, .log-in, .sign-up').on('click', function(event) {
        var terms = $('.terms'),
            recovery = $('.recovery'),
            close = $('#toggle-terms'),
            arrow = $('.tabs-content .fa');

        if ($(this).hasClass('agree') || $(this).hasClass('log-in') || ($(this).is('#toggle-terms')) && terms.hasClass('open')) {
            if (terms.hasClass('open')) {
                terms.swapClass('open', 'closed');
                close.swapClass('open', 'closed');
                arrow.swapClass('active', 'inactive');
            } else {
                if ($(this).hasClass('log-in')) {
                    return;
                }
                terms.swapClass('closed', 'open').scrollTop(0);
                close.swapClass('closed', 'open');
                arrow.swapClass('inactive', 'active');
            }
        } else if ($(this).hasClass('forgot') || $(this).hasClass('sign-up') || $(this).is('#toggle-terms')) {
            if (recovery.hasClass('open')) {
                recovery.swapClass('open', 'closed');
                close.swapClass('open', 'closed');
                arrow.swapClass('active', 'inactive');
            } else {
                if ($(this).hasClass('sign-up')) {
                    return;
                }
                recovery.swapClass('closed', 'open');
                close.swapClass('closed', 'open');
                arrow.swapClass('inactive', 'active');
            }
        }
    });
});

// DISPLAY MESSAGE
$(function() {
    $('.recovery .button').on('click', function(event) {

        $('.recovery .mssg').addClass('animate');
        setTimeout(function() {
            $('.recovery').swapClass('open', 'closed');
            $('#toggle-terms').swapClass('open', 'closed');
            $('.tabs-content .fa').swapClass('active', 'inactive');
            $('.recovery .mssg').removeClass('animate');
        }, 2500);
    });
});
// SWITCH TAB ON SIGN UP CLICK
$(function() {
    var tab = $('.tabs h3 a');
    tab.on('click', function(event) {
        tab.removeClass('active');
        $(this).addClass('active');
        var tab_content = $(this).attr('href');
        $('div[id$="tab-content"]').removeClass('active');
        $(tab_content).addClass('active');
    });

    // SWITCH TAB ON SIGN UP CLICK
    $('.sign-up').on('click', function(event) {

        // Activate the sign-up tab
        tab.removeClass('active'); // Remove 'active' class from all tabs
        $('.tabs h3 a[href="#signup-tab-content"]').addClass('active'); // Add 'active' class to the sign-up tab

        // Change the active tab content
        $('div[id$="tab-content"]').removeClass('active'); // Hide all tab contents
        $('#signup-tab-content').addClass('active'); // Show the sign-up tab content
    });
}
);
