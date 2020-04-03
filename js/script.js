$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
});

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

  /* progress bar */

  $(function(){
      $(".progress-bar").each(function(){
          $(this).animate({
              width: $(this).attr("aria-valuenow") + "%"}
              ,1000);
      });
  });

  function validation(){
      var name = document.getElementById("name").value;
      var subject = document.getElementById("subject").value;
      var phone = document.getElementById("phone").value;
      var message = document.getElementById("message").value;
      var email = document.getElementById("email").value;
      var errorm = document.getElementById("errorm");
      var text;

     errorm.style.padding = "10px";

     if (name.length < 2){
         text = "please Enter Valid Name";
         errorm.innerHTML = text;
         return false ;
     }
    
  if (email.indexOf("@") == -1 || email.length < 5){
    text = "please Enter Valid email";
    errorm.innerHTML = text;
    return false ;

}
alert("form sunmitted success")
  }

  /* animation*/

  $ (function(){
    new WOW().init();
  });
  $(window).on('load', function(){
        $("#home-heading-1").addClass("animated pulse");
        $("#home-head").addClass("animated fadeInLeft");
        $("#home-text").addClass("animated zoomIn");
        $("#arrow-down i").addClass("animated fadeInDown infinite");
  });

    
////** *** map */

      

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
    
    


