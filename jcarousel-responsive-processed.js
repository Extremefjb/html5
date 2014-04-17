(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');


        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = 225;
                jcarousel.jcarousel('items').css('width', width + 'px');

                //the process of the loop
                $('.jcarousel').on('jcarousel:animateend', function (event, carousel) {

                    //modify the 4th image
                    $('.jcarousel ul li:nth-child(4)').addClass('processing');
                    $('.jcarousel ul li:nth-child(4)').css({'width': '455px', 'height': '340px', 'margin-top': '0'});
                    $('.jcarousel ul li:nth-child(4)').append('<div class="processinglabel"></div>');
                    $('.jcarousel ul li:nth-child(4) img').css({'width': '455px', 'height': '318px', 'margin-top': '0'});
                    //change the background-image of pimg1,pimg2,pimg3,.progress
                    $('div.pimg').empty();
                    $("div.pimg").css({"display": "none", "background-size": "610px 479px"});


                    //get the src of li.processing img and replace that of pimg1,pimg2,pimg3
                    var src1 = $('li.processing  img').attr('src'), src2 = src1.replace(".jpg", "_progress.jpg"), src3 = src1.replace(".jpg", "_finished.jpg"), imgId = 1;
                    //replace the src of img2,img3
                    $("div.pimg1").css({"background-image": "url(" + src1 + ")"});
                    $("div.pimg2").css({"background-image": "url(" + src2 + ")"});
                    $("div.pimg3").css({"background-image": "url(" + src3 + ")"});


                    /*delay and fadein to show the background-image of pimg1, pimg2, pimg3，and change the background-position of .progress while the progress ,the process id driven by event */
                    $("div.pimg1").delay(1000).fadeIn(1000, function () {
                        $(".progress").css({'background-position-y': '34.5%'});
                        $("div.pimg2").delay(1000).fadeIn(1000, function () {
                            $(".progress").css({'background-position-y': '68.5%'});
                            $("div.pimg3").delay(1000).fadeIn(1000, function () {
                                $(".progress").css({'background-position-y': '103%'}).delay(500).fadeIn(0, function () {
                                    $(".progress").css({'background-position-y': '0%'});
                                    $('div.processinglabel').remove();
                                    //scroll after the fourth child is processed
                                    $('.jcarousel').jcarousel('scroll', '-=1');
                                    //modify the fifth image
                                    $('.jcarousel ul li:nth-child(5)').removeClass('processing');
                                    $('.jcarousel ul li:nth-child(5)').css({'width': '225px', 'height': '171px', 'margin-top': '80px'});
                                    $('.jcarousel ul li:nth-child(5) div').remove();
                                    $('.jcarousel ul li:nth-child(5)').append('<div class="processedlabel"></div>');
                                    $('.jcarousel ul li:nth-child(5) img').css({'width': '225px', 'height': '171px', 'margin-top': '0'});
                                });
                            });
                        });

                    });

                    //remove the processedlabel of  ninth-child
                    $('.jcarousel ul li:nth-child(9) div.processedlabel').remove();
                });

            })

            .jcarousel({
                wrap: 'circular'
            });

        //scroll once to activate the process
        jcarousel.jcarousel('scroll', -1);

    });
})(jQuery);
