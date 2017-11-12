// Attendre le chargement du DOM

$(document).ready(function(){

    // Chargement cube et contenu 

    $(window).on('load', function(){
    	console.log('La page est entièrement chargée');
    	// Apparition header et body
	    $('html').fadeTo(1000);
	    $('.cube, .inner-cube').fadeIn(3000);
	    });

    // Quand je clique sur le cube, j'arrête l'animation
    $('.cube').on('click',function(){
			$(this).toggleClass("cube-stop");

		});

}); // Fin de la fonction d'attente du chargement du DOM
