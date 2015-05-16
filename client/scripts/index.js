
//Slider Settings
jQuery(document).ready(function ($) {
    $(".royalSlider").royalSlider({
        keyboardNavEnabled: true
    });

//Slow scroll

    $('a[href^="#"]').click(function(){
        if(document.getElementById($(this).attr('href').substr(1)) != null) {
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
        }
        return false;
    });
});