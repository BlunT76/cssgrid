
function modal(formatedCode) {

    var gCode =  document.getElementById("generated-code").innerHTML;
    
    // Créé les deux paragraphe qui acceuilleront le css
    gCode.innerHTML = 
    `<p id="container-code">
    /* Container's CSS */ <br>
    </p>
    <p id="content-code">
    /* Contents' CSS */ <br>
    </p>`;

    // Début de synthaxe de la propriété css parente
    gCode.innerHTML += `.container { <br>`; 
    console.log(containerCSS);

    // 
    for (property of containerCSS) {
        if (property.value != null) {
           gCode.innerHTML += `
            .
           ` + property.name + `
             : 
           ` + property.value + `
           ; <br>`;
        }
    }
    console.log(containerCSS);
    // Fermeture de la propriété css parent
    gCode.innerHTML += `} <br>`; 
}


// Ceci est un objet qui contiendra toutes les valeurs des propriétés css, ainsi que leurs noms sous forme de string ( pour une facilité d'affichage des noms )
// Ici le choix d'un objet contenant des objets est plus pertinent que celui d'une classe car ce sont des valeurs qui ne dépendent que d'une div en html.
// On peut donc prévoir son contenu
var containerCSS = {

    // Le Display en cours sur le container
    display : {name : "display", value : null},
    // FLEX : Sur les containers
    flex_direction : { name : "flex-direction", value : null},
    flex_wrap : { name : "flex-wrap", value : null},
    align_items : { name : "align-items", value : null},
    align_content : { name : "align-content", value : null},
    flex_grow : { name : "flex-grow", value : null},
    align_self : { name : "align-self", value : null},
    order : { name : "order", value : null},
    // GRID : Sur les containers
    grid_template : { name : "grid-template", value : null},
    grid_template_areas : { name : "grid-template-areas", value : null},
    grid_template_rows : { name : "grid-template-rows", value : null},
    grid_template_columns : { name : "grid-template-column", value : null},
    grid_gap : { name : "grid-gap", value : null},
    grid_auto_rows : { name : "grid-auto-rows", value : null},

    children : [] /* Contient des objets "cssContentCSS" */
}

// Si le systeme avec d'inception, d'objets dans des objets, vous dégoute.... je laisse une petite classe ici "au cas ou" pour les propriétés css...
//   Cela n'aura aucun impact sur la synthaxe des requettes, juste sur la synthaxe du contenu de l'pobjet "containerCSS"
/*class property {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
}*/


// Ici impossible de passer à coté du systeme de classe si l'on veut faire un algorythme simple d'utilisation et de maintenance.
// Il est difficile de prévoir le nombre maximum de div qui seront instanciées dans le container
// (et ce serait pénible d'itérer un grand nombre d'objets qui suivraient du coup le meme chéma que le "containerCSS".)
class cssContentCSS {

    constructor (align_self_value, flex_grow_value, order_value, grid_row_value, grid_column_value) {
// FLEX : sur les contenus
        this.align_self = { name : "align-self", value : align_self_value };
        this.flex_grow = { name : "flex-grox", value : flex_grow_value };
        this.order = { name : "order", value : order_value };
// GRID : Sur les contenus
        this.grid_row = { name : "grid-row", value : grid_row_value };
        this.grid_column = { name : "grid-column", value : grid_column_value };
    }
}