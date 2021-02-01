$(document).ready(function() {
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

// no-js handling
for (let el of document.querySelectorAll(".js")) el.style.display = "block";
