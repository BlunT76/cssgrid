$(document).ready(function () {
    $("#wrapper").toggleClass("toggled");
    var divcount = 0;
    setFlexAttr();
    $(".divs").click(function () {

        var selection = $(this).attr("value");
        if (selection === "add") {
            divcount++;
            
            $(".container").append(`<div id="divjq${divcount}" class="border border-light divjq">
                                        <h3>${divcount}</h3>
                                        <span>order</span><br/>
                                        <input class="orderdiv input-group-text" type="number" value="0"><br/>
                                        <span>flex-grow</span><br/>
                                        <input class="flexgrow input-group-text" type="number" value="0"><p></p>
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
    $(".container").delegate(".orderdiv", "change", setFlexOrder);
    $(".container").delegate(".flexgrow", "change", setFlexGrow);
    $(".container").delegate("#align-self", "change", setAlignSelf);

    function setFlexAttr() {
        var attrFlex = $(this).attr("id");
        //var valFlex=$(attrFlex).val();
        var valFlex = $("#" + attrFlex + " option:selected").val();
        console.log(attrFlex+":"+valFlex);
        //$("#display option:selected").val()
        $(".container").css(attrFlex, valFlex);
    }

    function setFlexOrder() {
        var orderAttr = $(this).val();
        console.log("order:" + orderAttr);
        $(this).parent().css("order", orderAttr);
    }

    function setFlexGrow() {
        var growAttr = $(this).val();
        console.log("flex-grow:" + growAttr);
        $(this).parent().css("flex-grow", growAttr);
    }

    function setAlignSelf() {
        var asAttr = $(this).attr("id");
        var asVal = $("option:selected", this).val();
        console.log(asAttr + ":" + asVal);
        $(this).parent().css(asAttr, asVal);
    }
});
