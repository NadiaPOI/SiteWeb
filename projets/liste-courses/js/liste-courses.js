/*
-Attendre le chargement du DOM 
-Capter la soumission du formulaire
    -Verifier si la catégorie est selectionnée
    -Vérifier si le nom est renseigné
    -Vérifier si le commentaire est renseigné
    -Verifier si l'option est selectionnée
        -Si les 4 champs sont remplis, valider le formulaire
        -Si le formulaire est validé, vider les champs du formulaire
*/

// Attendre le chargemment du DOM
document.addEventListener('DOMContentLoaded', function() {

    // Variables globales
    var form = document.querySelector('form');

    var productCategory = document.querySelector('#productCategory');
    var productName = document.querySelector('#productName');
    var productComment = document.querySelector('#productComment');
    var productOptions = document.querySelectorAll('[name="productOption"]');
    var allCheckboxes = document.querySelector('[type="radio"]');

    var productCategoryLabel = document.querySelector('[for="productCategory"]');
    var productNameLabel = document.querySelector('[for="productName"]');
    var productCommentLabel = document.querySelector('[for="productComment"]');
    var productOptionsLabel = document.querySelector('[for="productOption"]');
    var optionList = document.querySelector('ul');

    var productList = document.querySelector('#productList');
    var blackProductList = document.querySelector('#blackProductList');
    var productOptionSelected;
    var productCount = 0;

    // Fonctions globales
    function showError(label, input){

        // Récupérer le contenu inital du label
        var initialText = label.innerHTML;

        /*
            Afficher un message dans le DOM
            - Sélectionner le label à modifier
            - Appliquer la fonction innerHTML sur le label avec le contenu 'Catégorie : <strong>obligatoire</strong>'
        */
        label.innerHTML = initialText + ' : <strong class="form-error">obligatoire</strong>';

        /*
        Masquer le message
            - Sélectionner le input
            - Appliquer la fonction onfocus
                - Sélectionner le label
                - Modifier le contenu HTML du label 
        */
        if (input !== false) {
          input.onfocus = function(){
              label.innerHTML = initialText;
          }
        } else {
          // Array.prototype.forEach.call(document.querySelectorAll('input[name="productOptionsRadio"]'), function(item) {
          //   item.onfocus = function() {
          //     label.innerHTML = initialText;
          //   }
          // })
          var inputs = document.querySelectorAll('input[name="productOptionsRadio"]');
          for (var j = 0; j < inputs.length; j++) {
            inputs[j].onfocus = function() {
              label.innerHTML = initialText
            }
          }
        }

    };

    function hideError() {
      // 1 recuperer balises messages erreur (strong)
      var errors = document.querySelectorAll(".form-error");

      //2 suppression balises
      for (var i = 0; i <= errors.length - 1; i++) {
        errors[i].parentNode.removeChild(errors[i]);
      }

    }

    // Fonction pour ajouter un produit dans la liste
    function addPrduct(productImg, productName, productComment, productOption){

        // En cas de premier produit
        if( productCount == 0 ){
            blackProductList.style.display = 'none';
        };
        
        // Création d'une balise LI
        var newRow = document.createElement('li');

        // Ajout du contenu dans la balise
        newRow.innerHTML = ''+
        '<img src="images/'+ productImg +'.svg" alt="Picto '+ productImg +'">'+
        '<p>'+ productName +' : '+ productComment +'</p>'+
        '<p>'+ productOption +'</p>'
            
        // Ajout de la balise dans le DOM
        productList.appendChild(newRow);
        
        // Incrémenter productCount
        productCount++;
    };

    /*
    Capter la soumission du formulaire
        - Sélectionner le formulaire
        - Appliquer la fonction onsubmit();
        - Bloquer le comportement naturel du formulaire
    */

    // Appliquer la fonction onsubmit() sur le formulaire
    form.onsubmit = function(event){

        // Initier une variable pour la validation finale du formulaire
        var scoreForm = 0;

        // Bloquer le comportement naturel du formulaire
        event.preventDefault();

        /*
        Vérifier si la catégorie est sélectionnée
            - Sélectionner la balise #productCategory
            - Analyser la valeur de la balise #productCategory
                - Si la valeur est égale à 'null' -> la catégorie n'est pas sélectionnée
                - Sinon, récupérer la valeur de la catégorie sélectionnée
        */

        // Analyser la valeur de la balise #productCategory
        if( productCategory.value == 'null' ){
            // La catégorie n'est pas sélectionnée
            // Appeler la fonction pour afficher une erreur
            showError(productCategoryLabel, productCategory);

            // Ramener la valeur de scoreForm à 0
            scoreForm = 0;


        } else{
            // La catégorie est sélectionnée
            console.log('La catégorie sélectionnée est : ' + productCategory.value);

            // Incrémenter scoreForm de 1
            scoreForm++;
        };


        /*
        Vérifier si le nom est renseigné
            - Sélectionner la balise #productName
            - Analyser la valeur de #productName
                - Si la taille de la valeur de #productName est inférieur à 1 -> le nom n'est pas renseigné
                - Sinon afficher la valeur de #productName
        */
        if( productName.value.length == 0 ){
            // Appeler la fonction pour afficher une erreur
            showError(productNameLabel, productName);

            // Ramener la valeur de scoreForm à 0
            scoreForm = 0;

        } else{
            console.log('Le nom du produit est : ' + productName.value);
            // Incrémenter scoreForm de 1
            scoreForm++;
        };

        /*
        Vérifier si le commentaire est renseigné
            - Sélectionner la balise #productComment
            - Analyser la valeur de #productComment
                - Si la taille de la valeur de #productComment est inférieur à 1 -> le commentaire n'est pas renseigné
                - Sinon afficher la valeur de #productComment
        */
        if( productComment.value.length == 0 ){
            console.log('Définir un commentaire');
            // Appeler la fonction pour afficher une erreur
            showError(productCommentLabel, productComment);

            // Ramener la valeur de scoreForm à 0
            scoreForm = 0;

        } else{
            console.log('Le commentaire du produit est : ' + productComment.value);
            // Incrémenter scoreForm de 1
            scoreForm++;
        };


        /*
        Vérifier si l'option est sélectionnée
            - Sélectionner les inputs radio
            - Vérifier la valeur
                - Si la valeur est vide -> affciher un message d'erreur
                - Si la valeur n'est pas vide -> afficher la valeur
        */

        // Vérification de l'option
        var productOptionsRadio = document.querySelector('input[name="productOptionsRadio"]:checked');
        if(productOptionsRadio === "undefined" || productOptionsRadio === null ) {
            // Affichage du message d'erreur
            showError(productOptionsLabel, false);
        
        } else{
            // Définition de l'option sélectionnée
              productOptionSelected = productOptionsRadio.value;            

            // Incrémenter formScore
            scoreForm++;
        };



        // Vérifier la valeur de scoreForm : si c'est égale à 4 le formulaire est validé
        if(scoreForm == 4){
            console.log('Le formulaire est validé !');
            // Ajout du produit dans le tableau
            addPrduct(productCategory.value, productName.value, productComment.value, productOptionSelected);

            hideError();

            // Réinitialiser le formulaire
            form.reset();
        }
        
    };


}); // Fin de la fonction d'attente du DOM



    
 