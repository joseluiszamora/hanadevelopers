$(document).ready(function(e) {
    
$('#bt-show-form').click(function(e) {
   
	
	$('#contact').submit(function(e) {
    sendMail();
	return false;
});
});
// SCROLL FOCUS MOB 

$('input').focus(function(e) {
    $('.touch header#fix').css("z-index","-5000")
});

$('input').blur(function(e) {
    $('.touch header#fix').css("z-index","5000")
});

$('.contacto #contact').submit(function(e) {
    sendMail();
	return false;
	
});
/*
$('input').keydown(function(event) {
        if (event.keyCode == 13) {
            sendMail();
            return false;
         }
    });


$("#send").click(function(e) {
    sendMail();
});*/
	
function sendMail() {
	
	
	
	$('.touch header#fix').css("z-index","5000")
	
	
		// validate and process form
		// first hide any error messages
   
			$('.forminput').removeClass("error-form");
			
	  var name = $("input#name").val();
		if (name == "Name" || name=="") {
      $("input#name").addClass("error-form");
      $("input#name").focus();
	  $('.touch header#fix').css("z-index","-100")
    return false;
    }
		
		
		var phone = $("input#phone").val();
		if (phone == "Phone Number" || phone=="") {
      $("input#phone").addClass("error-form");
      $("input#phone").focus();
	  $('.touch header#fix').css("z-index","-100")
      return false;
    }
	
	
		
		
		var email = $("input#email").val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (email == "Email" || email=="") {
      $("input#email").addClass("error-form");
      $("input#email").focus();
	  $('.touch header#fix').css("z-index","-100")
    return false;
    }
	else if(!emailReg.test(email)) {
            $("input#email").addClass("error-form");
      $("input#email").focus();
	  $('.touch header#fix').css("z-index","-100")
	  return false;
        }
		
	
		 var msg = $("textarea#msg").val();
		if (msg == "Details of your project (share with us the context and goals of your idea)" || msg=="") {
      $("textarea#msg").addClass("error-form");
      $("textarea#msg").focus();
	  $('.touch header#fix').css("z-index","-100")
    return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone  + '&msg=' + msg;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        
    
	$('#form-load').delay(200).animate({width:"100%"},1200,"swing");
	
	$('.contacto-inter #form-pad').delay(1400).animate({top:420},600,"swing");
	
	$('.contacto #form-pad').delay(1400).animate({top:450},600,"swing");
	
	$('#enviado').html("<div id='enviado-icon' class='icons-sprite'></div><h2 class='white'>Message sent!</h2>")
        .append("<p>Thank you for contacting us, we'll get in touch with you soon!</p>").hide().delay(1600).fadeIn(500);
		
	$('html.touch, .touch body').delay(1200).animate({
		scrollTop: $("#form-box").offset().top-50
	}, 500,"swing");
	

	
	if (wW<550) {
		$('#form-box.contacto-inter').delay(1200).animate({height:370},500,"swing");
		$('#form-box.contacto').delay(1200).animate({height:300},500,"swing");
	}
	
	if (wW>550 && wW<650) {
		$('.touch #form-box').delay(1200).animate({height:280},500,"swing");
	}
	
	}
       
      
     });
    return false;
	};
	
});

