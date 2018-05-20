$("#wrapper").toggleClass("toggled");

var divcount = 0;

$(document).ready(function () {
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
                                        <select class="custom-select align-self">
                                            <option disabled selected value> -- align-self -- </option>
                                            <option value="stretch">align-self:stretch</option>
                                            <option value="center">align-self:center</option>
                                            <option value="start">align-self:start</option>
                                            <option value="end">align-self:end</option>
                                        </select><p></p>
                                    </div>`);

        } else {
            if (divcount > 0) {
                $("#divjq" + divcount).remove();
                divcount--;
            }
        }
    });

    $("select").on("change", setFlexAttr);
    $(".container").delegate(".orderdiv", "change", setFlexOrder);
    $(".container").delegate(".flexgrow", "change", setFlexGrow);
    $(".container").delegate(".align-self", "change", setAlignSelf);

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
        var asAttr = "align-self";
        var asVal = $("option:selected", this).val();
        console.log(asAttr + ":" + asVal);
        $(this).parent().css(asAttr, asVal);
    }

    $("#gencss")
    .click(function () {

        containerCSS.display.value = $("#container").css("display");

        containerCSS.flex_direction.value = $("#flex-direction").val();
        containerCSS.justify_content.value = $("#justify-content").val();
        containerCSS.flex_wrap.value = $("#flex-wrap").val();
        containerCSS.align_items.value = $("#align-items").val();
        containerCSS.align_content.value = $("#align-content").val();

        containerCSS.children = [];
        for (var i = 0; i < divcount; i++) {


            var divname = "divjq" + (i + 1);
            containerCSS.children.push(new contentCSS(divname, null, null, null, null, null, null, null));
            console.table(containerCSS.children);
            containerCSS.children[i].order.value = $("#" + divname).find(".orderdiv").val();
            console.log(containerCSS.children[i].order);                
            containerCSS.children[i].flex_grow.value = $("#" + divname).find(".flexgrow").val();
            console.log(containerCSS.children[i].flex_grow);                
            containerCSS.children[i].align_self.value = $("#" + divname).find(".align-self").val();
            console.log(containerCSS.children[i].align_self);            
        }
        
        modal();
    });
});
