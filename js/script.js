// Attendre le chargement du DOM

$(document).ready(function(){

    // Burger Menu
    var burgerIcon = $('.fa-bars');
    var burgerMenu = $('nav ul');

    // Quand je clique sur burgurIcon, j'affiche burgerMenu
    burgerIcon.on('click', function(){
        burgerMenu.slideToggle();
        $(this).toggleClass('active');
    });

    // Affichage Burger au scroll
    $(function(){
	    $(window).scroll(function() {
	        if ($(this).scrollTop() > 350){  
	            $('nav').addClass("sticky");
	        }
	        else{
	            $('nav').removeClass("sticky");
	        }
	    });
	});

    // Chargement cube et contenu 

    $(window).on('load', function(){
    	console.log('La page est entièrement chargée');
    	
    	// Apparition header et body
	    $('body').fadeTo(2000);
	    $('header').fadeIn(2000).fadeTo(3000, 1);
    });

	// Portfolio
	        // Vérifier la présence de la class pagePortfolio
	        if($('.pagePortfolio').length == 1){

	            console.log('Vous êtes sur la page portfolio');

	            // Créer une fonction pour ajouter des balises dans le DOM
	            function addContent(cover, cover2, title, desc, link){
	                $('main section').append(''+

	                     '<div class="modal">'+
	                        '<div>'+
	                            '<i class="fa fa-times" aria-hidden="true"></i>' +
	                            '<h3>'+ title +'</h3>'+
	                            '<img src="images/'+ cover2 +'" alt="Image '+ title +'">'+
	                            '<p>'+ desc +'</p>'+
	                            '<a href="'+ link +'" target="_blank">Voir le projet </a>'+
	                        '</div>'+
	                    '</div>'+


	                    '<article>' +
	                        '<div>' +
	                            '<h3>'+ title +'</h3>' +
	                            '<button>Voir le projet</button>' +
	                        '</div>' +
	                        '<span style="background: url(images/'+ cover +')no-repeat center center fixed; background-size:cover; min-height:100%"></span>'+
	                    '</article>'
	                );
	            };

	            $.ajax({

	                // Header de la requête
	                    url: 'data/portfolio.json',
	                    type: 'GET',
	                    dataType: 'JSON',

	                // Corps de la requête
	                    success: function(data){
	                        
	                        // Faire une boucle sur data
	                        for( var i = 0; i < data.length; i++ ){
	                            addContent(data[i].cover, data[i].cover2, data[i].title, data[i].description, data[i].link)
	                        }

	                    },
	                    error: function(err){
	                        console.log(err)
	                    },
	                    complete: function(){

	                        // Pour capter un bouton généré en Ajax, il faut le faire dans le complete car le bouton n'est pas sélectionnable avant qu'il soit dans le DOM
	                        $('button').on('click', function(){
	                            $(this).parent().parent().prev().fadeIn();
	                        });

	                        $('.fa-times').click(function(){
	                            $(this).parent().parent().fadeOut();
	                        });
	                    }

	            })
	        }


}); // Fin de la fonction d'attente du chargement du DOM
