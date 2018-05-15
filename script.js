/*.container {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    grid-template-rows: 3fr 3fr 3fr 3fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    justify-items: stretch;
    align-items: stretch;
 }*/


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

    //grid-template-columns and grid-template-row settings
    //Use of var gtc and gtr because they share the same input value
    $("#template")
        .change(function () {
            var selection = $("#template option:selected").val();
            if (selection === "grid-template-columns" && gtc > 0) {
                $("#nbr").val(gtc);
            } else {
                $("#nbr").val(gtr);
            }
        });

    $("#nbr")
        .change(function () {
            var nbrcolcss = "";
            for (var i = 0; i < $("#nbr").val(); i++) {
                nbrcolcss += $("#nbr").val() + "fr ";
            }

            var selection = $("#template option:selected").val();
            $("#container").css(selection, nbrcolcss);
            if (selection === "grid-template-columns") {
                gtc = $("#nbr").val();
                cssgtc = nbrcolcss;
            } else {
                gtr = $("#nbr").val();
                cssgtr = nbrcolcss;
            }
        });

    //grid-column-gap setting in pixel
    $("#ColumnGap")
        .change(function () {
            var selection = $("#ColumnGap").val();
            console.log(selection)
            $("#container").css("grid-column-gap", selection + "px");
            //console.log(selection);
        });

    //grid-row-gap setting in pixel
    $("#RowGap")
        .change(function () {
            var selection = $("#RowGap").val();
            console.log(selection)
            $("#container").css("grid-row-gap", selection + "px");
            //console.log(selection);
        });

    //justify-items setting
    $("#justify")
        .change(function () {
            var selection = $("#justify option:selected").val();
            console.log(selection)
            $("#container").css("justify-items", selection);
            //console.log(selection);
        });

    //align-items setting
    $("#align")
        .change(function () {
            var selection = $("#align option:selected").val();
            console.log(selection)
            $("#container").css("align-items", selection);
            //console.log(selection);
        });

    //Add or remove div on button click
    $(".divs").click(function () {

        var selection = $(this).attr("value");
        if (selection === "add") {
            divcount++;
            $("#container").append('<div id="divjq'+divcount+'" class="border border-light divjq"><h3>' + divcount + '</h3><span>grid-column-start</span><input class="gridstart" type="number" value="0" ></div>');
            
        } else {
            if (divcount > 0) {
                $("#gridstart"+divcount).remove();
                $("#divjq"+divcount).remove();
                divcount--;
            }
        }
    });
    
    //grid-column-start setting
    $(".container").delegate(".gridstart","change", function () {
        var selection = $(this).val();
        var selectdiv = $(this).parent().css("grid-column-start", selection)
    });

    //generate css on click
    $("#gencss")
        .click(function () {
            var display = "display: " + $("#container").css("display")
            var gridc = "grid-template-columns: " + cssgtc;
            var gridr = "grid-template-rows: " + cssgtr;
            var cgap = "grid-column-gap: " + $("#ColumnGap").val() + "px";
            var rgap = "grid-row-gap: " + $("#RowGap").val() + "px";
            var jitems = "justify-items: " + $("#justify option:selected").val();
            var aitems = "align-items: " + $("#align option:selected").val();
            console.log(display)
            console.log(gridc);
            console.log(gridr);
            console.log(cgap);
            console.log(rgap);
            console.log(jitems);
            console.log(aitems);

            //$("#container").css("align-items", selection);
            //console.log(selection);
        });

});
