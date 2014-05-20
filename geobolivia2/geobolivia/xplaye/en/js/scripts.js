


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


// DOM READY
$(document).ready(function(e) {
	
/* NO SVG */
$('.no-svg img[src$=".svg"]').each(function(index, element) {
         element.src = element.src.replace('.svg','.png');
	
});

$('.hires img[src$=".jpg"]').each(function(index, element) {
         element.src = element.src.replace('.jpg','-2x.jpg');
});


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



smallAccordion() 
scrollarama();



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

  
function slideChange(args) {
	$('#dest-pagination .item').removeClass('selected');
	$('#dest-pagination .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
}

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


// WIDOWS


new function() {
   
    var Public = {
      
             'auto': function( bool ) {
                         return bool != undefined ? Private.auto = bool
                                                  : Private.auto;
                     },
             'init': function() {
                         return Private.init();
                     },

        
        'transform': function( string ) {
                         return Private.widont( string );
                     }
    };

  
    $.jqwidont = Public;



    var Private = {
       
            'auto': true,
            'init': init,

       
          'widont': widont,

      
          'regexp': new RegExp(
                        '[\\n\\r\\s]+'            // whitespace/newlines
                      + '('                       // capture...
                      + '[^\\n\\r\\s(?:&#160;)]+' // non-whitespace/newlines
                      + '[\\n\\r\\s]*'            // trailing whitespace
                      + ')$'                      // ...to end of the string

                        , 'm' // match across newlines
                    )
    };



    $(document).ready(function() {
        if( Private.auto ) init();
    });


    function init() {
       
        $( '#proyecto-intro p' ).widont();
    };



   
    $.fn.widont = function() {
        return $(this).each(function() {
            var $obj = $(this);

            $obj.html( Private.widont( $obj.html() ) );
        });
    };


    function widont( string ) {
        return string.replace( Private.regexp, "&#160;$1" );
    };
}();




	
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
	
	

	
	wW= $(window).width();
	
	
	
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
		
	}
	if ( wW < 800) {
		
	}
});

