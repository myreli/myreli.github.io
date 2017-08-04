(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

    $(window).on('load', function(){
        $('#emotions .item').carouselHeights();
    });

})(jQuery); // End of use strict

$(document).ready(function(){

    //forms control
    $('#login').click(function(){
        $('#form-login, #next').removeClass("hidden", 1000);
        $('#username').focus();
        $('#join, #intro, #login').hide();
    });

    $('#next').click(function(){
        $('#username').attr('disabled', true);
        $('#password').removeClass("hidden", 1000).focus();
    });

    $('#password').keyup(function(){
        $('#next').attr('href', 'page.html');
    });

    $('#join').click(function(){
        $('#form-join, #confirm').removeClass("hidden", 1000);
        $('#newusername').focus();
        $('#join, #intro, #login').hide();
    });

    $('#newusername').keyup(function(){
        $('#newpassword').attr('disabled', false);
    });
    $('#newpassword').keyup(function(){
        $('#confirmpsw').attr('disabled', false);
    });

    $('#emotions').carousel({
        interval: false
    }); 

    $(".dot").on("click", function(){
        var c = $(this);
        var showcase =c.parent().parent();
        var array = showcase.children();
        array.each(function (index) {
            ($(this).children()).removeClass("active");
           
        })
        c.addClass("active");
    });

});

// Normalize Carousel Heights - pass in Bootstrap Carousel items.
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide
    console.log("items: " + items);

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).parent().height()); 
            console.log("h: " + $(this).parent().height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        console.log("mh: " + tallest);
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
            console.log("new h:" + $(this).height());
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });

};

