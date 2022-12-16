
jQuery("#1").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#1").addClass("visible");
    } else {
        jQuery("#1").removeClass("visible");
    }
});