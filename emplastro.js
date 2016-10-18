/*=========================================
 * emplastro.js: Version 1.0
 * author: João Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT 
=========================================*/
jQuery.fn.emplastro = function () {
    jQuery(this).css("position", "absolute");
    jQuery(this).css("top", ((jQuery(window).height() - this.outerHeight()) /2-180) + jQuery(window).scrollTop() + "px");
    return jQuery(this);
};