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

// image gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.dataset.full || img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
