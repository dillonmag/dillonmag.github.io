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

// inject:clipboard

// endinject

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



