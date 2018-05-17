$(document).ready(function () {
    $("#wrapper").toggleClass("toggled");
    var divcount = 0;
    $(".divs").click(function () {

        var selection = $(this).attr("value");
        if (selection === "add") {
            divcount++;
            //$("#container").append(htmlarray.join(''))
            //console.log(htmlarray.join(''))
            $("#container").append(`<div id="divjq${divcount}" class="border border-light divjq">
                                        <h3>${divcount}</h3>
                                        <span>order</span>
                                        <input class="orderdiv" type="number" value="0"><p></p>
                                        <span>flex-grow</span>
                                        <input class="flexgrow" type="number" value="0"><p></p>
                                        <select id="align-self" class="custom-select">
                                            <option value="flex-start">align-self:flex-start</option>
                                            <option value="flex-end">align-self:flex-end</option>
                                            <option value="center">align-self:center</option>
                                            <option value="space-between">align-self:space-between</option>
                                            <option value="space-around">align-self:space-around</option>
                                        </select><p></p>
                                    </div>`);

        } else {
            if (divcount > 0) {
                $("#gridstart" + divcount).remove();
                $("#divjq" + divcount).remove();
                divcount--;
            }
        }
    });

    $("select").on("change", setFlexAttr);
    $(".container-fluid").delegate(".orderdiv", "change", setFlexOrder);
    $(".container-fluid").delegate(".flexgrow", "change", setFlexGrow);
    $(".container-fluid").delegate("#align-self","change", setAlignSelf);

    function setFlexAttr() {
        var attrFlex = $(this).attr("id");
        //var valFlex=$(attrFlex).val();
        var valFlex = $("#" + attrFlex + " option:selected").val();
        console.log(attrFlex);
        console.log(valFlex);
        //$("#display option:selected").val()
        $("#container").css(attrFlex, valFlex);
    }

    function setFlexOrder() {
        var orderAttr = $(this).val();
        console.log("order:"+orderAttr);
        $(this).parent().css("order", orderAttr);
    }

    function setFlexGrow() {
        var growAttr = $(this).val();
        console.log("flex-grow:"+growAttr);
        $(this).parent().css("flex-grow", growAttr);
    }
    function setAlignSelf() {
        var asAttr = $(this).attr("id");
        var asVal = $("option:selected", this).val();
        console.log(asAttr+":"+asVal);
        $(this).parent().css(asAttr,asVal);
    }
});
