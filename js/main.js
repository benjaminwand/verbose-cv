$(document).ready(function() {
  $(".no-js").hide(); // hides no-js-warning

  // filter food items with checkboxes
  $(".choices :checkbox").click(function() {
    $(".articles article").hide();

    if ($("input[name=category]:checked").length) {
      $("input:checked").each(function() {
        $(' [class="' + $(this).val() + '"]').show();
      });
    }
  });
});
