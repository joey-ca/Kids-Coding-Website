$(function(){
  'use strict';
    const $navLabel = $('.sidebarIconToggle');
    const $navList = $('ul.navbar-nav');

    $navList.on('click', function(){
    	$navLabel.click();	
    });

    var forms = document.getElementsByClassName('form-signup');
    var $formSignUp = $('.form-signup');
    
    /* Load back html using Ajax after submitting the sign-up form */
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {         
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
        /*
          $.ajax({
      		url: '../data/welcome.html',
      		type: 'post',
      		success: function(data){
      			$formSignUp.removeClass('was-validated');
    			$formSignUp.html(data);
      		}
      	)};
        */
           $.get('https://joey-ca.github.io/kids-coding/data/welcome.html', function(data){
          	$formSignUp.html(data).hide().fadeIn('slow');
           });
        }
      }, false);
    });

    $('.modal').on('hidden.bs.modal', function(){	
    	$.get('https://joey-ca.github.io/kids-coding/data/form.html', function(data){
             $formSignUp.html(data);
        });
	    $formSignUp.trigger('reset');
    	$formSignUp.removeClass('was-validated');
    });

    $(document).on('click', function () {
    	$('.navbar-collapse').collapse('hide');
    });

  	/* Slide In Animation */

  	$('.slide-left-row-1').scrollSlide({
		direction   : 'left', 	
		speed       : 1500,  	
		scrollstart : 250, 
		slideback   : true 	
	});

	$('.slide-right-row-2').scrollSlide({
		direction   : 'right', 	
		speed       : 1500,  	
		scrollstart : 650,  	
		slideback   : true 	
	});

	$('.slide-left-row-3').scrollSlide({
		direction   : 'left', 	
		speed       : 1500,  	
		scrollstart : 1050,  	
		slideback   : true 	
	});

	$('.slide-left-row-4').scrollSlide({
		direction   : 'left', 	
		speed       : 1500,  	
		scrollstart : 1650,  	
		slideback   : true 	
	});

	$('.slide-down-row-4').scrollSlide({
		direction   : 'down', 	
		speed       : 1500,  	
		scrollstart : 1650,  	
		slideback   : true	
	});

	$('.slide-right-row-4').scrollSlide({
		direction   : 'right', 	
		speed       : 1500,  	
		scrollstart : 1650,  	
		slideback   : true	
	});
});