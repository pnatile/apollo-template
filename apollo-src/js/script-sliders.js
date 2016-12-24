function initSimpleSliders() {

    var sliders = $(".ap-slider");
    for (var i = 0; i < sliders.length; i++) {
        var slider = sliders.eq(i);
        var strucId = slider.data("sid");
        if (!slider.data("init")) {
            $('#ap-slider-' + strucId).revolution({
                delay : slider.data("delay"),
                startheight : slider.data("height"),
                navigationType : slider.data("navtype"),
                navigationArrows : slider.data("navtbutton"),
                navigationStyle : "round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
                navigationHAlign : "right", // Vertical Align top,center,bottom
                navigationVAlign : "bottom", // Horizontal Align left,center,right
                navigationHOffset : 20,
                navigationVOffset : 20,
                soloArrowLeftHalign : "left",
                soloArrowLeftValign : "center",
                soloArrowLeftHOffset : 20,
                soloArrowLeftVOffset : 0,
                soloArrowRightHalign : "right",
                soloArrowRightValign : "center",
                soloArrowRightHOffset : 20,
                soloArrowRightVOffset : 0,
                touchenabled : "on", // Enable Swipe Function : on/off
                onHoverStop : "off", // Stop Banner Timet at Hover on Slide on/off
                stopAtSlide : -1,
                stopAfterLoops : -1,
                fullWidth : "off" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
            });

            // When stop button is clicked...
            $('#stopButton-' + +strucId).on('click', function(e) {

                $('#ap-slider-' + strucId).revpause();
                $('#ap-slider-' + strucId + ' .control button').toggle();
                $(this).hide();
                $('#resumeButton-' + +strucId).show();
            });

            // When resume button is clicked...
            $('#resumeButton-' + strucId).on('click', function(e) {

                $('#ap-slider-' + strucId).revresume();
                $(this).hide();
                $('#stopButton-' + strucId).show();
            });
            $('#ap-slider-' + strucId).find('li').show();
        }
        slider.data("init", "true");
    }
}

function initComplexSliders() {

    var sliders = $(".ap-complex-slider");
    for (var i = 0; i < sliders.length; i++) {
        var slider = sliders.eq(i);
        var strucId = slider.data("sid");
        if (!slider.data("init")) {
            $('#ap-slider-' + strucId).revolution({

                delay : slider.data("delay"),
                startheight : slider.data("height"),
                startwidth : slider.data("width"),

                hideThumbs : 10,

                thumbWidth : 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb!)
                thumbHeight : 50,
                thumbAmount : 5,

                navigationType : "bullet", // bullet, thumb, none
                navigationArrows : "solo", // nexttobullets, solo (old name verticalcentered), none

                navigationStyle : "round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom

                navigationHAlign : "center", // Vertical Align top,center,bottom
                navigationVAlign : "bottom", // Horizontal Align left,center,right
                navigationHOffset : 0,
                navigationVOffset : 20,

                soloArrowLeftHalign : "left",
                soloArrowLeftValign : "center",
                soloArrowLeftHOffset : 20,
                soloArrowLeftVOffset : 0,

                soloArrowRightHalign : "right",
                soloArrowRightValign : "center",
                soloArrowRightHOffset : 20,
                soloArrowRightVOffset : 0,

                touchenabled : "on", // Enable Swipe Function : on/off
                onHoverStop : "off", // Stop Banner Timet at Hover on Slide on/off

                stopAtSlide : -1,
                stopAfterLoops : -1,

                shadow : 1, // 1 = no Shadow, 1,2,3 = 3 Different Types of Shadows  (No Shadow in Fullwidth Version !)
                fullWidth : "on" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
            });

            $('#ap-slider-' + strucId).find('li').show();
        }
        slider.data("init", "true");
    }
}