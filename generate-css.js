



// Ceci est un objet qui contiendra toutes les valeurs des propriétés css, ainsi que leurs noms sous forme de string ( pour une facilité d'affichage des noms )
// Ici le choix d'un objet contenant des objets est plus pertinent que celui d'une classe car ce sont des valeurs qui ne dépendent que d'une div en html.
// On peut donc prévoir son contenu
var containerCSS = {

    // Le Display en cours sur le container
    display : {name : "display", value : null},
    // FLEX : Sur les containers
    flex_direction : { name : "flex-direction", value : null},
    flex_wrap : { name : "flex-wrap", value : null},
    justify_content : { name : "justify-content", value : null},
    align_content : { name : "align-content", value : null},
    ///////////////////////////////////
    // flex_grow : { name : "flex-grow", value : null},
    // align_self : { name : "align-self", value : null},
    // order : { name : "order", value : null},

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

    constructor (divName, align_self_value, flex_grow_value, order_value, grid_row_start_value, grid_row_end_value, grid_column_start_value, grid_column_end_value) {
        this.divName = divName
// FLEX : sur les contenus
        this.order = { name : "order", value : order_value };
        this.flex_grow = { name : "flex-grox", value : flex_grow_value };
        this.align_self = { name : "align-self", value : align_self_value };
// GRID : Sur les contenus
        this.grid_row_start = { name : "grid-row-start", value : grid_row_start_value };
        this.grid_row_end = { name : "grid-row-end", value : grid_row_end_value };
        this.grid_column_start = { name : "grid-column-start", value : grid_column_start_value };
        this.grid_column_end = { name : "grid-column-end", value : grid_column_end_value };
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

    var gCode =  document.getElementById("code-inside");
    // Créé les deux paragraphe qui acceuilleront le css
    gCode.innerHTML = 
    `<pre class="code-css language-css">
        <code id="container-code" class="language-css">
            /* Container's CSS */ <br>
        </code>
    </pre>
    <pre class="code-css language-css">
        <code id="content-code">
           /* Contents' CSS */ <br>
        </code>
    </pre>`;

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

            containerCode.innerHTML += `` + containerCSS[property].name + ` : ` + containerCSS[property].value + `; <br>`;
         }
    }
    // Fermeture de la propriété css conteneur
    containerCode.innerHTML += `} <br>`; 

    //On passe aux div contenues dans le conteneur
    // A remplacer par un for of 

    var containerMin = containerCSS.children;
    for (child of containerMin) {
    // Début de synthaxe de la propriété css d'un contenu        
        contentCode.innerHTML += `.` + child.name + ` { <br>`;

        for (property in child) {
            if (child[property].value != null) {
                contentCode.innerHTML += child[property].name + ` : ` + child[property].value + `; <br>`;
            }
        }
    // Fermeture de la propriété css d'un contenu
        contentCode.innerHTML += `} <br><br>`;

    }
}


function copyToCLipBoard () {
    
    var copiedCode = document.getElementById("code-inside");
    copiedCode.select();
    document.execCommand("copy");
    alert("Code copié: " + copiedCode.value);
}