/*.container {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    grid-template-rows: 3fr 3fr 3fr 3fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    justify-items: stretch;
    align-items: stretch;
 }*/


$("#wrapper").toggleClass("toggled");

$(document).ready(function () {
    var divcount = 0;
    var gtc = "";
    var gtr = "";
    var cssgtc = "";
    var cssgtr = "";

    //display css setting
    $("#display")
        .change(function () {
            var selection = $("#display option:selected").val();
            $("#container").css("display", selection);
            //console.log(selection);
        });
    
    $("#gtc")
        .change(function () {
            var nbrcolcss = "";
            for (var i = 0; i < $("#gtc").val(); i++) {
                nbrcolcss += $("#gtc").val() + "fr ";
            }
            $("#container").css("grid-template-columns", nbrcolcss);
            gtc = $("#gtc").val();
            cssgtc = nbrcolcss;
    });
    
    //grid-template-row settings
    $("#gtr")
        .change(function () {
            var nbrrowcss = "";
            for (var i = 0; i < $("#gtr").val(); i++) {
                nbrrowcss += $("#gtr").val() + "fr ";
            }
            $("#container").css("grid-template-rows", nbrrowcss);
            gtr = $("#gtr").val();
            cssgtr = nbrrowcss;
    });

    //grid-column-gap setting in pixel
    $("#ColumnGap")
        .change(function () {
            var selection = $("#ColumnGap").val();
            console.log(selection);
            $("#container").css("grid-column-gap", selection + "px");
            //console.log(selection);
        });

    //grid-row-gap setting in pixel
    $("#RowGap")
        .change(function () {
            var selection = $("#RowGap").val();
            console.log(selection);
            $("#container").css("grid-row-gap", selection + "px");
            //console.log(selection);
        });

    //justify-items setting
    $("#justify")
        .change(function () {
            var selection = $("#justify option:selected").val();
            console.log(selection);
            $("#container").css("justify-items", selection);
            //console.log(selection);
        });

    //align-items setting
    $("#align")
        .change(function () {
            var selection = $("#align option:selected").val();
            console.log(selection);
            $("#container").css("align-items", selection);
            //console.log(selection);
        });

    //Add or remove div on button click
    $(".divs").click(function () {

        var selection = $(this).attr("value");
        if (selection === "add") {
            divcount++;
            $("#container").append('<div id="divjq' + divcount + '" class="border border-light divjq"><h3>' + divcount + '</h3><p>grid-column-start</p><input class="colstart input-group-text" type="number" value="0" ><p>grid-column-end</p><input class="colend input-group-text" type="number" value="0" ><p>grid-row-start</p><input class="rowstart input-group-text" type="number" value="0" ><p>grid-row-end</p><input class="rowend input-group-text" type="number" value="0" ></div>');

        } else {
            if (divcount > 0) {
                $("#divjq" + divcount).remove();
                divcount--;
            }
        }
    });

    //grid-column-start setting
    $(".container")
        .delegate(".colstart", "change", function () {
            var selection = $(this).val();
            var selectdiv = $(this).parent().css("grid-column-start", selection)
        });

    //grid-column-end setting
    $(".container")
        .delegate(".colend", "change", function () {
            var selection = $(this).val();
            var selectdiv = $(this).parent().css("grid-column-end", selection)
        });
    
    //grid-row-start setting
    $(".container")
        .delegate(".rowstart", "change", function () {
            var selection = $(this).val();
            var selectdiv = $(this).parent().css("grid-row-start", selection)
        });

    //grid-row-end setting
    $(".container")
        .delegate(".rowend", "change", function () {
            var selection = $(this).val();
            var selectdiv = $(this).parent().css("grid-row-end", selection)
        });

    //generate css on click (wip)

    $("#gencss")
        .click(function () {

            containerCSS.display.value = $("#container").css("display");
            containerCSS.grid_template_columns.value = cssgtc;
            containerCSS.grid_template_rows.value = cssgtr;
            containerCSS.grid_column_gap.value = $("#ColumnGap").val() + "px";
            containerCSS.grid_row_gap.value = $("#RowGap").val() + "px";
            containerCSS.justify_items.value = $("#justify option:selected").val();
            containerCSS.align_items.value = $("#align option:selected").val();
            
            modal();
        });

});
