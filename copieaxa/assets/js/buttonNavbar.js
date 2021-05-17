/*
BOUTON NAVBAR POUR LG AUTOMOBILES A MODIFIER POUR AXA
 */
// MENU RESPONSIVE JS
jQuery('#Burger').click(function(){
    jQuery('#Burger, #NavHeader').toggleClass('open');
    if(jQuery(window).width() <= 1200){
        // blocage du scrool
        if(jQuery('#NavHeader').hasClass('open')){
            document.documentElement.style.overflow = 'hidden';
        }
        else{
            document.documentElement.style.overflow = 'auto';
        }
    }
});
jQuery('.menu-item-has-children').click(function(){

    jQuery(this).toggleClass('active');

});
