var allImages = '';

for (var i = 1; i < 37; i++) {
  allImages +=
    '<a href="images/farm-gallery/a (' +
    i +
    ').jpeg" class="lightbox-image" data-fancybox-group="fancybox"><img src="images/farm-gallery/a (' +
    i +
    ').jpeg" alt="TFIC"></a>';
}

$ ('#photos').append (allImages);
