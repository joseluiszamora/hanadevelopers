


// VARIABLES 
wW = $(window).width()
wH = $(window).height()
userAgent = window.navigator.userAgent;
chrome = 0;
inc = 1;
if(navigator.userAgent.match('CriOS')) {
		chrome = 1
	}
operaMini = (navigator.userAgent.indexOf('Opera Mini') > -1)

// FUNCIONES

/* SLIDER */
function mainSlider() {
	
	
	
 	$('#main-slider').carouFredSel({
 		direction:'left',
 		width: '100%',
 		items: {
  			visible:1,
			filter: 'li'
 		},
 		auto: {
			play:false
			
 		},
		scroll: {
 			items: 1,
  			duration: 500,
  			pauseDuration: 8000,
  			fx:"crossfade",
			onAfter: function (){
			slideLink()	
			
			},
			
			
 		},
 		swipe: {
			onTouch: true,
			responsive: true,
			onMouse: true
 		},
 		next: {
			key: "right",
			button: "#next"
			
 		},
 		prev: {
			key: "left" ,
			button: "#prev"	
 		}
	});
}

/* ADAPT HEIGHT */

function setSlideHeight(){
	windowHeight = $(window).height();
	infobarHeight = $('#info-bar').height();
	slideshowHeight = windowHeight - infobarHeight;
	if (userAgent.match(/iPad/i) && wW > 800 && chrome == 0) {
    slideshowHeight = slideshowHeight-15
	}
	$('.inicio #slideshow').height(slideshowHeight)
}

/* CENTER DEST SCROLLER */

function centerDestScroller() {
	$('.no-touch #destacados-reel').scrollLeft(0)
wW = $(window).width();

startOffsetItem = $('.slider li:nth-child(4)').offset().left
sliderAreaWidth = $('#dest-bts').width();

startOffsetItemDiff = wW - sliderAreaWidth


startOffset = $('.slider li:nth-child(3)').offset().left
startOffsetDiff = wW - startOffset


$('.no-touch #destacados-reel').scrollLeft(startOffsetItem-(startOffsetItemDiff/2))

};

/* SHOW MOB MENU */

function showMobMenu() {
	
	window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	
}, false);


	rPos = "40%"
	if (wW<450)
		{
		rPos = "60%"	
		}
	$('#great-wrap, header#fix, footer').animate({right:rPos},300,"swing");
	menu.animate({right:'0'},300,"swing");	
	$('body').addClass("mob-active")	
	}
	
	function hideMobMenu() {
	rPos = "-40%"
		if (wW<450)
		{
	rPos = "-60%"	
		}
	menu.animate({right:rPos},300,"swing");	
	$('#great-wrap, header#fix, footer').animate({right:'0%'},300);
	$('body').removeClass("mob-active")
	}
	
	
	
// SCROLLARAMA 





function scrollarama() {
	
	

if (navigator.userAgent.indexOf('Opera Mini') == -1) {

var controller = $.superscrollorama();

$('.no-touch .superscroll').each(function(index, element) {
	wH = $(window).height();
	offset = (wH/2)-50
	topP = $(this).offset().top
	initOpacity=0;
	initTop = "50px"
	
	

	
	if (topP < wH){ initOpacity =1; initTop = "0px"}
	
    controller.addTween($(this), TweenMax.fromTo( $(this), .25, {css:{opacity:initOpacity, 'top':initTop}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'top':'0'}, ease:Quad.easeInOut}), 100, -offset);
});
 

}

}
	
/* FIXED NAVIGATION SCROLL */
function fixDiv() {
	var $cache = $('header#fix'); 
	var $cache2 = $('header'); 
	
	if ($(window).scrollTop() > 200) {
    	$cache.addClass("headfix")
		$cache2.addClass('headhide');
	};
  
	if ($(window).scrollTop() > 350) {
    	$cache.addClass("headfix-fixed")
	};
  
	if ($(window).scrollTop() < 350) {
    	$cache.removeClass("headfix-fixed")
 	};
	
	if ($(window).scrollTop() < 200) {
    	$cache.removeClass("headfix")
		$cache.removeClass("headfix-fixed")
	};
	
	if ($(window).scrollTop() < 100) {
	$cache2.removeClass('headhide');
	};	
};

// BT ACCORDION 

function smallAccordion() {
	
	$('.accordionlist h4').click(function(e) {
		if(wW < 550) {
			
			$(this).toggleClass("acc-active")
				
  			if($(this).next("ul").is(":visible")){
			$(this).next("ul").slideUp("fast");
			} else {
			$(".accordionlist ul").slideUp("fast");
			$(this).next("ul").slideToggle("fast");
		}
		
		}
	});
	
	
}


function slideLink() {
linkOrigin = $('#main-slider li:first-child a').attr("href")

targetLink = $('#slide-controls-wrap a')

targetLink.attr("href",linkOrigin)
}


function destacadosCenter() {

$('.dest-box .dest-img').each(function(index, element) {
    
	
destW = $(this).children('img').width()
destParentW = $(this).width()
destH = $(this).children('img').height()
destParentH = $(this).height()



destOffw = (destW-destParentW)/2
destOffh = (destH-destParentH)/2

$(this).children('img').css("left",-destOffw);
$(this).children('img').css("top",-destOffh);

});
	

}

// ASPECT RATIO  

function aspect() {
ratio = wW/wH

if (ratio < 1.6) {$('.no-touch #main-slider li').css("background-size","auto 110%")}
else {$('.no-touch #main-slider li').css("background-size","cover")}

	
}





// DOM READY
$(document).ready(function(e) {
	
$('#fader').css("display","block")
	
$('html, body').scrollTop(0)
	
mainSlider();
/* NO SVG */
$('.no-svg img[src$=".svg"]').each(function(index, element) {
         element.src = element.src.replace('.svg','.png');
});



function cached(url){
    var test = document.createElement("img");
    test.src = url;
    return test.complete || test.width+test.height > 0;
}
var base_url = "http://xplaye.com/images/01.jpg"
iscached=cached(base_url);

if(!iscached) {

	// LOADER 
	
	
	
	preloadImg = new Image()
		if (wW > 550) {
	
			preloadImg.src = "http://xplaye.com/images/01.jpg"
	
		}

		else {preloadImg.src = "http://xplaye.com/images/01_mob.jpg"}


	var percentaje = 0;

	var randNum = 20;
	
	function percent (){
	
            percentaje = percentaje+Math.floor(Math.random()*randNum)
			if (percentaje > 70 )
				{randNum = 2}
			if (percentaje > 95 )
				{randNum = 0; percentaje = 95;  window.clearInterval(inter)}
			
    		$('#pageloader').animate({width:percentaje+"%"},300,"swing")
		   
	}


	
	var inter = setInterval(percent,500);
 
	
	preloadImg.onload= function() {
    	window.clearInterval(inter)
    	$('#pageloader').stop().animate({width:"100%"},100,"swing");
		   
		$('#main-slider').trigger("play",true);
		$('#pageloader').fadeOut()
		$('#fader').delay(400).fadeOut()
		slideLink();
		  
		   
     	}
	 
	
}
	
else {
 	setTimeout(function() {
	
	$('#main-slider').trigger("play",true);
	$('#fader').fadeOut("fast")
	slideLink();
	},100);

}



// RETINA
(function( $ ){
	$.fn.retina = function(retina_part) {
		// Set default retina file part to '-2x'
		// Eg. some_image.jpg will become some_image-2x.jpg
		var settings = {'retina_part': '-2x'};
		if(retina_part) jQuery.extend(settings, { 'retina_part': retina_part });

		if(window.devicePixelRatio >= 2) {
			this.each(function(index, element) {
				if(!$(element).attr('src')) return;
				
				var checkForRetina = new RegExp("(.+)("+settings['retina_part']+"\\.\\w{3,4})");
				if(checkForRetina.test($(element).attr('src'))) return;

				var new_image_src = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1"+ settings['retina_part'] +"$2");
				$.ajax({url: new_image_src, type: "HEAD", success: function() {
					$(element).attr('src', new_image_src);
				}});
			});
		}
		return this;
	}
})( jQuery );

$('img').retina();


/* LAUNCHERS */


setSlideHeight();

if (navigator.userAgent.indexOf('Opera Mini') == -1) {
	fixDiv();
}
smallAccordion() ;
scrollarama();

slideLink();

aspect();
centerDestScroller()

destacadosCenter()

$('#video').removeAttr("controls")
  
  
/* FORM */

 $(".forminput").focus(function(srcc)
    {
        if ($(this).val() == $(this)[0].placeholder)
        {
            $(this).addClass("txt-in");
            $(this).val("");
        }
    });
    
    $(".forminput").blur(function()
    {
        if ($(this).val() == "")
        {
            $(this).removeClass("txt-in");
            $(this).val($(this)[0].placeholder);
        }
    });
    
	$(".forminput").val( function() {
		
		$(this).attr("placeholder")
		
	});
	$(".forminput").focus();  
    $(".forminput").blur();    
	
  


// MOBILE SAFARI FIX

window.onorientationchange = detectOrientation;
function detectOrientation(){
    if(typeof window.onorientationchange != 'undefined'){
        if ( orientation == 0 ) {
            setSlideHeight()
			
        }
        else if ( orientation == 90 ) {
           setSlideHeight()
		  
        }
        else if ( orientation == -90 ) {
            setSlideHeight()
			
        }
        else if ( orientation == 180 ) {
            setSlideHeight()
			
        }
    }
}


// PARALLAX SLIDES
$window = $(window);
	
$('.no-touch *[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
	var xPos = '50%';
	var bgpos = $bgobj.css("background-position");
	var topmod = 0;
	
	if (bgpos == "60% 50%") {
		var xPos = '60%';	
	}
	if (bgpos == "45% 0%") {
		var xPos = '45%';	
		topmod = 50
	}            
	$(window).scroll(function() {
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		// Put together our final background position
		var coords = xPos +(yPos + 50 - topmod) + '%';
		// Move the background
		$bgobj.css({ backgroundPosition: coords });	
	}); // window scroll Ends
});	


//PARALLLAX VIDEO
$('.no-touch *[data-type="fixed"]').each(function(){
	
	var $bgobj = $(this); // assigning the object
	var xPos = '50%';
	          
	$(window).scroll(function() {
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		// Put together our final background position
		var coords = xPos +(yPos + 50) + '%';
		// Move the background
		$bgobj.css({ top: yPos });	
	}); // window scroll Ends
	
});

/* SCROLL */

$('a.scroll').click(function(e) {
	e.preventDefault()
	
    targetAnchor = $(this).attr("href")
	
	targetOffset = $(targetAnchor).offset().top
	
	$('html, body').animate({
    	scrollTop: $(targetAnchor).offset().top-49
	}, 500);
	
});

// DOWN KEY SCROLL //

 $(document).keydown(function (evt) {
	 
	 if ($('input, textarea').is(":focus")) {
		 
	 }
	 
	 else {
	 
	currentScroll = $('html').scrollTop();
	currentScrollLimit = $(".section1").offset().top-50

	 if(currentScroll < currentScrollLimit) {
	
    if (evt.keyCode == 40) { 
      
		$('html, body').animate({
		scrollTop: $(".section1").offset().top-50
	}, 1500); 
	 
    }
	}
	
	 
	}
  });
  
  $('input').keydown(function(e) {
    
});

// BT COMIENZA DESKTOP
	
$('.no-touch #bt-show-form').on("click",function(e) {
	$('#form-box').slideToggle();
	
	windowHeight = $(window).height();
	formHeight = $('#form-box').height();
	
	if (wW < 550) {formPos = 400}
	else { formPos = 460}
		
	$('html, body').animate({
    	scrollTop: $("#form-box").offset().top-(windowHeight-formPos-inc)
	}, 500);
	
	inc = inc-5
});

// BT COMIENZA MOBILE
	
$('.touch #bt-show-form').on("tap",function(e) {
	$('#form-box').slideToggle();
	windowHeight = $(window).height();
	formHeight = $('#form-box').height();
	if (wW < 550) {formPos = 400}
	else { formPos = 460}
	$('html, body').animate({
    	scrollTop: $("#form-box").offset().top-50
 	}, 500);
});

  
// PARALAX DESTACADOS IMGS  
$('.destacados-box .dest-img').mousemove(function(e){
	/* Work out mouse position */
	var offset = $(this).offset();
	var xPos = e.pageX - offset.left;
	var yPos = e.pageY - offset.top;
	/* Get percentage positions */
	var mouseXPercent = Math.round(xPos / $(this).width() * 100);
	var mouseYPercent = Math.round(yPos / $(this).height() * 100);
	
	var destParent = $(this).parent('div').attr("id")
	
	/* Position Each Layer */
	$('#'+destParent+' .dest-img').children('img').each(
		function(){
			var diffX = $(this).parent().width() - $(this).width();
			var diffY = $(this).parent().height() - $(this).height();
			var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;
			var myY = diffY * (mouseYPercent / 100);
			var cssObj = {
				'left': myX + 'px',
				'top': myY + 'px'
			}
			//$(this).css(cssObj);
			$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
		}
	);
});
	
	
// SCROLL DOWN BT DESKTOP
$('.no-touch .scroll-down').on("click",function(e) {
	$('html, body').animate({
		scrollTop: $(".section1").offset().top-50
	}, 1500);
});

// SCROLL DOWN BT MOBILE
$('.touch .scroll-down').on("tap",function(e) {
	$('html, body').animate({
    	scrollTop: $(".section1").offset().top-50
 	}, 500);
});



// DEST SCROLLER


$('#destacados-reel').scroll(function(){
	
	if ($('body').hasClass("dragging")) {	
		
	}
	
	else {
	
	wW = $(window).width();
	sliderW = $('#destacados-reel .slider').width();
	scrolled = $('#destacados-reel').scrollLeft()
	
	ts = sliderW-wW
	prop2 = (scrolled*100)/ts

	
	if (prop2 == 100)
	
	
	{$('#destacados-reel').scrollLeft(startOffset-startOffsetItemDiff+20 );
	
	$('#scrollright2').toggle();
	
	}
	
	
	}
	
	if (prop2 == 0){
	{$('#destacados-reel').scrollLeft(startOffsetItem-20);
	$('#scrollleft2').toggle();
	}
	}
	
})


// HOVER SCROLLER 



$('#scrollright,#scrollright2').hover(function(e) {
	
	
    $('#destacados-reel').animate({scrollLeft:9000},13000,"linear");
	$('.no-touch #scrollright-icon').stop().animate({right:0},300,"swing");
	}, function() {
		
	$('#destacados-reel').stop()
	$('.no-touch #scrollright-icon').stop().animate({right:-70},300,"swing");
	
});


$('#scrollleft, #scrollleft2').hover(function(e) {
	

    $('#destacados-reel').animate({scrollLeft:-9000},18000,"linear");
	$('.no-touch #scrollleft-icon').stop().animate({left:0},300,"swing");
	}, function() {
		
	$('#destacados-reel').stop()
	$('.no-touch #scrollleft-icon').stop().animate({left:-70},300,"swing");
	
	
});




// IOS SLIDER 

$('.touch #destacados-reel').iosSlider({
	desktopClickDrag: true,
	snapToChildren: true,
	infiniteSlider: true,
	snapSlideCenter: true,
	onSlideChange: slideChange,
	autoSlide: false,
	scrollbar: true,
	keyboardControls: true
});
			
function slideChange(args) {
	$('#dest-pagination .item').removeClass('selected');
	$('#dest-pagination .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
}
	
$('#destacados-reel-mob').iosSlider({
	snapToChildren: true,
	desktopClickDrag: true,
	infiniteSlider: true,
	snapSlideCenter: true,
	stageCSS: {
		overflow: 'visible'
	}
});
				
$('#destacados-reel-mob').iosSlider('goToSlide', 1);


$('#metodo-reel').iosSlider({
	desktopClickDrag: true,
	snapToChildren: true,
	infiniteSlider: true,
	snapSlideCenter: true,
	navSlideSelector: '#dest-pagination .item',
	navPrevSelector: ' #dest-pagination.prev',
	navNextSelector: '#dest-pagination .next',
	onSlideChange: slideChange,
	autoSlide: false,
	scrollbar: true,
	keyboardControls: true
});


	
// SWIPE EVENTS	

$("html.touch #mob-nav, html.touch .header-in, #main-wrap").on("swiperight",function(){
  hideMobMenu();
});


$("html.touch .header-in").on("swipeleft",function(){
 showMobMenu();
});


// OPERA MINI FIXES

if (navigator.userAgent.indexOf('Opera Mini') > -1) {
	$('header#fix').css("display","none");
}


	
});

// USER TRIGGER
if (navigator.userAgent.indexOf('Opera Mini') == -1) {
$(window).scroll(fixDiv);
}

/* MOBILE NAV TRIGGER */
	
$(function() {
	var pull = $('.pull');
	menu = $('#mob-nav');
	$(pull).on('click tap', function(e) {
		e.preventDefault()
		var gRight = $('#great-wrap').css("right")
		if ( gRight == "0px" || gRight == "0%" ) {
			showMobMenu()
		}
		else {
			hideMobMenu()
		}	
	});
});

/* RESIZE FUNCTIONS */

$(window).resize(function(e) {
	
	
    setSlideHeight()
	
	
	

	
	
	wW= $(window).width();
	wH= $(window).height();
	
	$('.no-touch #destacados-reel').scrollLeft(0)
	aspect();
	centerDestScroller()
	$('.dest-img img').css("left",0);
	
	window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	
}, false);

	if (wW < 551 ) {
		$('.no-touch .mob-active #great-wrap, .mob-active footer, .mob-active header#fix').css("right","60%")
		$('.no-touch .accordionlist ul').css("display","none")
	}
	if (wW > 551){
		$('.no-touch .mob-active #great-wrap, .mob-active footer, .mob-active header#fix').css("right","40%")
		$('.no-touch .accordionlist ul').css("display","block")
	}
	if ( wW > 800) {
		hideMobMenu()
		$('#mobile-nav').css("display","none");
		$('#main-slider').trigger("configuration", {
        	auto: {
				play:false
			}
		});
	}
	if ( wW < 800) {
		$('#main-slider').trigger("configuration", {
        	auto: {
				play:true
			}
		});
	}
});

