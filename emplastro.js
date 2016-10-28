	/*=========================================
	 * emplastro.js: Version 1.0
	 * author: João Pereira
	 * website: http://www.joaopereira.pt
	 * email: joaopereirawd@gmail.com
	 * Licensed MIT 
	=========================================*/
	jQuery.fn.emplastro = function () {
	    this.css("position", "absolute");
	    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
	    return this;
	}


	function teste(){
		$('.teste').emplastro();
	}
	teste();

$(document).ready(function(){
    $(window).scroll(function(){
        teste();
        
    })
})


