/*google map*/ 
$(window).on ('load', function(){

    var adressString = "Adi Quala, Eritrea";
    var myLat = {lat:14.634720, lng:38.834259};

    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:11,
        center : myLat

    });
    // Add marker
    var marker = new google.maps.Marker({
        positon : myLat,
        map:map ,
        title: "click to see exact address"
    })
    // add Info window
    var infowindow = new google.maps.InfoWindow({
        content: adressString
      });
      // show info when user clicks marker
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
});




// testimonials 


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:false,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false 
    });
  });






