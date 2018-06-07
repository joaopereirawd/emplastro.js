	/****************************************
	 * emplastro.js: Version 1.5
	 * author: João Pereira
	 * website: http://www.joaopereira.pt
	 * email: joaopereirawd@gmail.com
	 * Licensed MIT 
	*****************************************/
jQuery.fn.emplastro = function( options ) {
 	
	var emplastro = $(this);

 	var application =  {
		init: function() { 
			var object = emplastro;
			var object_height = object.height();
		    var win_height = $(window).height();
		    var win_outer = $(window).outerHeight();
		    var win_scrollTop = $(window).scrollTop();
		    	object.css("top", ((win_outer/2 - object_height/2 )) + $(window).scrollTop() + "px"); //calc
		}
 	}

 	//emplastro settings
    var settings = $.extend( {
    	position:'absolute',
    	width:'',
    	height:'',
    	class:'',
        backgroundColor: "#fff",
        side:'right',
        borderRadius:'0px',
        boxShadow:'0px 3px 8px rgba(0, 0, 0, 0.28)',
        transition:'all .2s',
        gutter:10
    }, options );


	emplastro.css(
		{	
			'position':settings.position,
			'width':settings.width,
			'height':settings.height,
			'background-color':settings.backgroundColor,
			'border-radius':settings.borderRadius,
			'box-shadow':settings.boxShadow,
			'transition':settings.transition
		}
	);


	var t =  emplastro;
	//console.log(emplastro);
	
	switch (settings.side) {
	    case 'left':
	        emplastro.css({'left':'0px'});
	        	if(settings.gutter) {
	        		emplastro.css({'margin-left':settings.gutter+'px'});
	        	}
	        break;
	    case 'right':
	    	emplastro.css({'right':'0px'});
	        	if(settings.gutter) {
	        		emplastro.css({'margin-right':settings.gutter+'px'});
	        	}
	    	break;
	    default:
	    	emplastro.css({'left':'0px'});
	        	if(settings.gutter) {
	        		emplastro.css({'margin-left':settings.gutter+'px'});
	        	}
	}


    return this.each(function() {
		$(document).ready(function(){
			application.init();			    
			$(window).scroll(function(){
		        application.init();
		    });
		});
    });
 
};





