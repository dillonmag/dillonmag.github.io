

$('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    animationLoop: false,
    directionNav: true,
    slideToStart: 0,
    slideshowSpeed: 1000,
    start: function(slider) {
        $('a.slide_thumb').click(function() {
            $('.flexslider').show();
            var slideTo = $(this).attr("rel")//Grab rel value from link;
            var slideToInt = parseInt(slideTo)//Make sure that this value is an integer;
            if (slider.currentSlide != slideToInt) {
                slider.flexAnimate(slideToInt)//move the slider to the correct slide  (Unless the slider is also already showing the slide we want);
            }
        });
    }
});


$(function () {
    $('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

    if (!screenfull.enabled) {
        return false;
    }

    $('#request').click(function () {
        screenfull.request($('#container')[0]);
        // does not require jQuery, can be used like this too:
        // screenfull.request(document.getElementById('container'));
    });

    $('#exit').click(function () {
        screenfull.exit();
    });

    $('#toggle').click(function () {
        screenfull.toggle($('#container')[0]);
    });

    $('#request2').click(function () {
        screenfull.request();
    });

    $('#demo-img').click(function () {
        screenfull.toggle(this);
    });

    function fullscreenchange() {
        var elem = screenfull.element;

        $('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

        if (elem) {
            $('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
        }

        if (!screenfull.isFullscreen) {
            $('#external-iframe').remove();
            document.body.style.overflow = 'auto';
        }
    }

    document.addEventListener(screenfull.raw.fullscreenchange, fullscreenchange);

    // set the initial values
    fullscreenchange();
});
