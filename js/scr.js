$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false 
    });
  });
/* Google map Js*/
$(window).on('load',function(){

    var addressString = "Adi Quala, Eritrea";
    var myLatlong = {lat:14.634720,lng:38.834259};

    // rendering google map
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: myLatlong});
    });