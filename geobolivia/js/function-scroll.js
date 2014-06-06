$(function(){
  // PARALLAX EFECTS
  $('.scrollLink').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  
  // scroll function
  function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
      mainNav.css("height", "1px").removeClass("in").addClass("collapse");
      mainNav.removeClass("open");
    }
  }

  if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
  }

  /* ****************** Scroll to top ********************* */

  $(".totop").hide();

  $(window).scroll(function(){
    if ($(this).scrollTop()>300) {
      $('.totop').fadeIn();
      //headerColorsWhite();
      //footerColor();
    }else{
      $('.totop').fadeOut();
      //headerColorsTransparent();
      //footerTransparent();
    }
  });
  
  $('.totop a').click(function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 500);
  });
});

function headerColorsTransparent(){
  $("#nav-header").css("background", "url(images/black.png)");
  $("#nav-header .navbar-nav > li > a").css("color", "#FFFFFF");
}
function headerColorsWhite(){
  //$("#nav-header").css("background", "none repeat scroll 0 0 #F8F8F8");
  $("#nav-header").css("background", "url(images/black1.png)");
  $("#nav-header .navbar-nav > li > a").css("color", "#FFFFFF");
}
function footerColor(){
  $("#transparent.footer").css("display", "none");
  $("#color.footer").css("display", "block");
}
function footerTransparent(){
  $("#transparent.footer").css("display", "block");
  $("#color.footer").css("display", "none");
}