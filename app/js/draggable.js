$(function() {
  $( "#data-output" ).sortable({
    revert: true
  });
  $( ".post" ).draggable({
    connectToSortable: "#data.output"
  });
  $( "ul, li" ).disableSelection();
});