
function modal(formatedCode) {
    
    document.getElementById("generated-code").innerHTML = 
    `
    <p>
    
    </p>
    <p>
    `/* Contenu CSS des enfants */`
    </p>
    `;
}

var containerCSS = {

    display : "",

    // FLEX : Sur les containers
    flex_direction : "",
    justify_content : "",
    flex_wrap : "",
    align_items : "",
    align_content : "",

    flex_grow : "",
    align_self : "",
    order : "",

    // GRID : Sur les containers
    grid_template : "",
    grid_template_areas : "",
    grid_template_rows : "",
    grid_template_columns : "",
    grip_gap : "",
    grid_auto_rows : "",

    children : [] /* Contient des objets "cssContentCSS" */
}

class cssContentCSS {

    constructor (align_self, flex_grow, order, grid_column, grid_row) {

// FLEX : sur les contenus
        this.align_self = align_self;
        this.flex_grow = flex_grow;
        this.order = order;

// GRID : Sur les contenus
        this.grid_column = grid_column;
        this.grid_row = grid_row;
    }
}