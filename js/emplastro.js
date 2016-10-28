	/*=========================================
	 * emplastro.js: Version 1.0
	 * author: João Pereira
	 * website: http://www.joaopereira.pt
	 * email: joaopereirawd@gmail.com
	 * Licensed MIT 
	=========================================*/
	jQuery.fn.emplastro = function () {
	    this.css("position", "absolute");
	    var win_height = $(window).height(); 
	    var win_outer = $(window).outerHeight(); 
	    var win_scrollTop = $(window).scrollTop();
	   	var object = $(this).height();
	    	console.log(object);

	    this.css("top", ((win_outer/2 - object/2 )) + $(window).scrollTop() + "px");
	    return this;
	}


	function teste(){
		$('.teste').emplastro();
	}

	$(document).ready(function(){
		teste();
	    $(window).scroll(function(){
	        teste(); 
	    });
	});