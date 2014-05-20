$(function(){
  resizeContainers();
  centerHome();

  $(window).on('resize', function(){
    resizeContainers();
    centerHome();
  });
});

function resizeContainers(){
  $('.main-content section').css("min-width", $(window).width()+"px");
  $('.main-content section').css("min-height", $(window).height()+"px");  
}

function centerHome(){
  // center form search HOME section
  $("#searchContainer").css("margin-top", ($(window).height() / 2)+"px");  
}