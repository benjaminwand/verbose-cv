$(document).ready(function() {
  // hides no-js-warning
  $(".no-js").hide();

  // filter food items with checkboxes
  $(".choices :checkbox").click(function() {
    $(".polaroid").hide();
    if ($("input[name=category]:checked").length) {
      $("input:checked").each(function() {
        $("." + $(this).val()).show();
      });
    }
  });
});
