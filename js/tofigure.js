$('.tofigure').each(function() {
    $(this).replaceWith($('<figure2 class="img-with-caption tofigure">' + this.innerHTML + '</figure>'));
});
$('.tofigure').children('img').each(function() {
    var caption;
    caption = $(this).attr('title');
    $(this).before('<figcaption class="caption">' + caption + '</figcaption>');
});
