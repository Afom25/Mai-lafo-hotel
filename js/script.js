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
 
  
  function validation(){
      var name = document.getElementById("name").Value;
      var subject = document.getElementById("subject").value;
      var phone = document.getElementById("phone").value;
      var message = document.getElementById("message").value;
      var email = document.getElementById("email").value;
      var errorm = document.getElementById("errorm");
      var text;
  }

    if(name.length < 2){
        text = "please enter correcr name"
        errorm.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.lenght<5){
        text = "please enter valid email";
        errorm.innerHTML = text;
        return false;
    }
    alert ("form submitted success")
    $ (function(){
        new WOW().init();
      });
      $(window).on('load', function(){
            $("#home-heading-1").addClass("animated fadeInDown");
            $("#home-heading-2").addClass("animated fadeInLeft");
            $("#home-text").addClass("animated zoomIn");
            $("#arrow-down i").addClass("animated fadeInDown infinite");
      });
    





