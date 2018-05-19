



// Ceci est un objet qui contiendra toutes les valeurs des propriétés css, ainsi que leurs noms sous forme de string ( pour une facilité d'affichage des noms )
// Ici le choix d'un objet contenant des objets est plus pertinent que celui d'une classe car ce sont des valeurs qui ne dépendent que d'une div en html.
// On peut donc prévoir son contenu
var containerCSS = {

    // Le Display en cours sur le container
    display : {name : "display", value : null},
    // FLEX : Sur les containers
    flex_direction : { name : "flex-direction", value : null},
    flex_wrap : { name : "flex-wrap", value : null},
    // align_items : { name : "align-items", value : null},
    align_content : { name : "align-content", value : null},
    flex_grow : { name : "flex-grow", value : null},
    align_self : { name : "align-self", value : null},
    order : { name : "order", value : null},
    // GRID : Sur les containers
    grid_template : { name : "grid-template", value : null},
    grid_template_rows : { name : "grid-template-rows", value : null},
    grid_template_columns : { name : "grid-template-column", value : null},
    grid_column_gap : { name : "grid-column-gap", value : null},
    grid_row_gap : { name : "grid-row-gap", value : null},
    justify_items : { name : "justify-items", value : null},
    align_items : { name : "align-items", value : null},

    children : [] /* Contient des objets "contentCSS" */
}


// Ici impossible de passer à coté du systeme de classe si l'on veut faire un algorythme simple d'utilisation et de maintenance.
// Il est difficile de prévoir le nombre maximum de div qui seront instanciées dans le container
// (et ce serait pénible d'itérer un grand nombre d'objets qui suivraient du coup le meme chéma que le "containerCSS".)
class contentCSS {

    constructor (divName, align_self_value, flex_grow_value, order_value, grid_row_value, grid_column_value) {
        this.divName = divName
// FLEX : sur les contenus
        this.align_self = { name : "align-self", value : align_self_value };
        this.flex_grow = { name : "flex-grox", value : flex_grow_value };
        this.order = { name : "order", value : order_value };
// GRID : Sur les contenus
        this.grid_row = { name : "grid-row", value : grid_row_value };
        this.grid_column = { name : "grid-column", value : grid_column_value };
    }
}










// Si le systeme avec d'inception, d'objets dans des objets, vous dégoute.... je laisse une petite classe ici "au cas ou" pour les propriétés css...
//   Cela n'aura aucun impact sur la synthaxe des requettes, juste sur la synthaxe du contenu de l'pobjet "containerCSS"
/*class property {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
}*/


function modal(formatedCode) {

    //CODE DE RECUPERATION DES PROPRIETES
    var container = document.getElementById("container");
    //Pour le parent ( un "for" de moins )
    // for (property of ) {

    // }
    //Pour les enfants
    // for (childNodes of container.childNodes) {

    // }

    // CODE DE FORMATAGE ET D'INSTANCIATION DES PROPRIETES

    var gCode =  document.getElementById("generated-code");
    // Créé les deux paragraphe qui acceuilleront le css
    gCode.innerHTML = 
    `<code id="container-code">
    /* Container's CSS */ <br>
    </code>
    <p id="content-code">
    /* Contents' CSS */ <br>
    </p>`;

    var containerCode = document.getElementById("container-code");
    var contentCode = document.getElementById("content-code");
    //On commence par instancier les propriétés du conteneur
    // Début de synthaxe de la propriété css conteneur
    containerCode.innerHTML += `.container { <br>`; 
    // 
    for (property in containerCSS) {
        console.log("name of container's property : " + containerCSS[property].name);
        console.log("value of container's property : " + containerCSS[property].value);

        if (containerCSS[property].value != null) {

            containerCode.innerHTML += `
            .
           ` + containerCSS[property].name + `
             : 
           ` + containerCSS[property].value + `
           ; <br>`;
         }
    }
    // Fermeture de la propriété css conteneur
    containerCode.innerHTML += `} <br>`; 

    //On passe aux div contenues dans le conteneur
    // A remplacer par un for of 
    // for (child of containerCSS.children) {
    // // Début de synthaxe de la propriété css d'un contenu        
    //     contentCode.innerHTML += `.` + child.name + ` { <br>`;
    // //
    //     for (property of child) {
    //         if (property.value != null) {
    //             contentCode.innerHTML += `
    //             .
    //             ` + property.name + `
    //                 : 
    //             ` + property.value + `
    //             ; <br>`;
    //         }
    //     }
    // // Fermeture de la propriété css d'un contenu
    //     contentCode.innerHTML += `} <br><br>`;

}