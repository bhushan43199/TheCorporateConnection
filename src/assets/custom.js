function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.navbar').addClass("sticky");
      $('.navbar').css({"background-color": "#fff", "transition": "0.5s all"});
    } else {
      $('.navbar').removeClass("sticky");
      $('.navbar').css({"background-color": "transparent"});
  
    }
  });
  $( document ).ready(function() {
    $(".tab").click(function () {
      $(".menu li").removeClass("active");
      $(this).addClass("active");   
      });
  });
  $('.menu li a').click(function () {
    $('#myNav').css("height", "0%");
  });
  
  $(document).ready(function () {
    $(document).mouseup(function(e) 
    {
      
      var cont = $("#search_ip");
      if (!cont.is(e.target) && cont.has(e.target).length === 0) 
      {
          cont.hide();
      }
    $(".serch").click(function () {
      $("#search_ip").toggle();
    });
  });
});

// When the user clicks on the button, scroll to the top of the document
$(document).ready(function () {
    $("#scroll_btn").click(function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });
  
  });
  /* Scroll Top Function end */
  /* Scroll Down Start  */
  $(document).ready(function () {
    $(".ct-btn-scroll").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });
  
  /* Scroll Down end */
  /* Scroll Top Function start */
        window.onscroll = function() {scrollFunction()};
  
           function scrollFunction() {
             if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               document.getElementById("scroll_btn").style.display = "block";
             } else {
               document.getElementById("scroll_btn").style.display = "none";
             }
           }
  
           // When the user clicks on the button, scroll to the top of the document
           $(document).ready(function() {
               $("#scroll_btn").click(function(event) {
                   event.preventDefault();
                   $("html, body").animate({ scrollTop: 0 }, "slow");
                   return false;
               });
  
           });         
  /* Scroll Top Function end */ 