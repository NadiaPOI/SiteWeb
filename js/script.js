// Attendre le chargement du DOM

$(document).ready(function(){
    // Burger Menu
    var burgerIcon = $('.fa-bars');
    var burgerMenu = $('nav ul');

    // Quand je clique sur burgurIcon, j'affiche burgerMenu
    burgerIcon.on('click', function(){
        burgerMenu.slideToggle();
    });
    // Version courte : burgerIcon.click(function(){burgerMenu.fadeIn()})





}); // Fin de la fonction d'attente du chargement du DOM
