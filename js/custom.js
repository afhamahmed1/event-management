 "use strict";
/*-----------------------------------
 Quick Mobile Detection
 -----------------------------------*/

 var isMobile = {
    Android: function() {
     
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
    
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
     
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
     
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
     
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
     
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



 /*-----------------------------------
 REVOLUTION Slider + Shop tabs +
 -----------------------------------*/
	$(document).ready(function() {
            $('.revolution-slider').revolution(
            {
                dottedOverlay:"none",
                delay:6000,
                startwidth:1170,
                //startheight:windowsHeight,
				startheight:740,
                onHoverStop:"on",
                hideThumbs:0,
                fullWidth:"on",
				fullScreen: 'off',
                forceFullWidth:"off",
                navigationType:"none",
                shadow:0,
                spinner:"spinner4",
                hideTimerBar:"on"
				
            });
			
			/*-- listing detail page tabs --*/

			$('.tabs .tab-link').on('click', function(){
				var tab_id = $(this).attr('data-tab');
				var map;
				$('.tabs .tab-link').removeClass('current');
				$('.tab-content').removeClass('current');

				$(this).addClass('current');
				$("#"+tab_id).addClass('current');
				if(tab_id === 'tab-2'){
					
					init();
				}
			});
			
			/*-- sticky nav resize --*/
			
			$(window).bind('scroll', function() {
				var navHeight = 1;
				if ($(window).scrollTop() > navHeight) {
                 $('.nav-sticky').addClass('nav-height2');
				}
				else {
					$('.nav-sticky').removeClass('nav-height2');
				}
			});
			
			/*-- onepage active menu --*/
			
			$('ul.menu li a').click(function() {
				var $this = $(this);
				$this.parent().siblings().removeClass('active').end().addClass('active');
    
			});
			
			$('.view-switcher ul li').on('click',function(e) {
				if ($(this).hasClass('listview')) {
					$('.listing-main').removeClass('gridview').addClass('listview');
				}
				else if($(this).hasClass('gridview')) {
					$('.listing-main').removeClass('listview').addClass('gridview');
				}
			});
			$('.view-switcher ul li').on('click',function(e) {
					if ($(this).hasClass('listview')) {
					$('.view-switcher ul li.gridview').removeClass('active');
					$('.view-switcher ul li.listview').addClass('active');
				}
				else if($(this).hasClass('gridview')) {
					$('.view-switcher ul li.listview').removeClass('active');
					$('.view-switcher ul li.gridview').addClass('active');
				}
			});
			
    });


/*-----------------------------------
FUNFACTSs
-----------------------------------*/
	$('.count').waypoint(function() {  
		// start all the timers
		$('.count').each(count);
      
			function count(options) {
	  
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
			}
		},
		{
			offset: '70%',  // middle of the page
			triggerOnce: true	
		});


/*-- Page preloader --*/
			
	$(window).load(function(){
		$('.preloader').delay(500).fadeOut(1000);
	});


 $(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 700,
      min: 1,
      max: 1000,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
  });

  function showError(element, message) {
    // Remove any existing error message
    removeError(element);

    // Create a new error message element
    const errorMessage = $('<div class="error text-danger"></div>').text(message);

    // Insert the error message after the input field
    element.after(errorMessage);

    // Add red border to the input field
    element.addClass('border-danger');
  }

  // Function to remove the error message and red border
  function removeError(element) {
    // Remove any existing error message
    element.next('.error').remove();
	element.next('.text-danger').remove();

    // Remove red border from the input field
    element.removeClass('border-danger');
  }


  $(document).ready(function() {
	// Add a submit event handler to the form
	$('#login').submit(function(e) {
	  e.preventDefault(); // Prevent the form from being submitted
  
	  // Retrieve the form values
	  const name = $('#user_name').val();
	  const pass = $('#user_pass').val();
	  // Add more form fields as needed

	  if(!(name=="admin" && pass=="pass")){
		showError($('#user_name'),'Please enter correct username or password');
		
		return
	  }else {
		removeError($('#user_name'));
	  }
	  
  
	  // Create an object to store the form data
	  const formData = {
		name: name,
		pass: pass,
		// Add more properties as needed
	  };
  
	  // Convert the form data to a JSON string
	  const formDataJSON = JSON.stringify(formData);
  
	  // Save the form data to localStorage
	  localStorage.setItem('login', formDataJSON);
  
	  window.location.replace("/");
	});
  });
  
  $(document).ready(function() {
	const loggedInItems = $('.loggedin');
	const loginRegisterItem = $('#login-register');
	const loginButton = $('#login-button');
	const signupButton = $('#signup-button');
	const logoutButton = $('#logout-button');
  
	// Check if user is logged in
	const userData = localStorage.getItem('login');
	if (userData) {
	  // User is logged in
	  loggedInItems.show();
	  loginRegisterItem.hide();
	  logoutButton.show();
	} else {
	  // User is not logged in
	  loggedInItems.hide();
	  loginRegisterItem.show();
	  logoutButton.hide();
	}
  
	// Logout functionality
	logoutButton.click(function(e) {
	  e.preventDefault();
  
	  // Remove user data from localStorage
	  localStorage.removeItem('login');
  
	  // Show login and sign up options, hide logout option
	  loggedInItems.remove();
	  loginRegisterItem.show();
	  logoutButton.hide();
	});
  });
  
  
  