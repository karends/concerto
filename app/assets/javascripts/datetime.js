function addDateTimeUi() {
  // Setup the date pickers
  $("#start_time_date").datepicker();
  $("#end_time_date").datepicker();

  // Setup the time pickers
  $('#start_time_time').timepicker();
  $("#end_time_time").timepicker();
}

function toggleTimeSelects() {
  $(".event-toggleTimeSelects").on("click", function(e) {
    e.preventDefault();
    $(this).parent().hide();
    $(".event-timeSelectDiv").show();
  });

  $(".event-timeSelectDiv").hide();
}

function initDateTime() {
  if($('.datefield').length > 0) {
    addDateTimeUi();
  }
  if ( $(".event-toggleTimeSelects").length > 0 ) {
    toggleTimeSelects();
  }
}

$(document).ready(initDateTime);
$(document).on('page:change', initDateTime);