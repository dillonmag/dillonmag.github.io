var config = {
  '.chosen-select': {},
  '.chosen-select-deselect': {allow_single_deselect: true},
  '.chosen-select-no-single': {disable_search_threshold: 10},
  '.chosen-select-no-results': {no_results_text: 'Nothing found'},
  '.chosen-select-width': {width: '95%'}
};
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
  $('[data-toggle="popover"]').popover();
});
$('body').on('click', function(e) {
  $('[data-toggle="popover"]').each(function() {
    //the 'is' for buttons that trigger popups
    //the 'has' for icons within a button that triggers a popup
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});

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

