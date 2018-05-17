$(document).ready(function () {
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
                                        <input class="order" type="number" value="0"><p></p>
                                        <span>flex-grow</span>
                                        <input class="flexgrow" type="number" value="0"><p></p>
                                        <select id="align-self" class="custom-select">
                                            <option value="align-self:flex-start">align-self:flex-start</option>
                                            <option value="align-self:flex-end">align-self:flex-end</option>
                                            <option value="align-self:center">align-self:center</option>
                                            <option value="align-self:space-between">align-self:space-between</option>
                                            <option value="align-self:space-around">align-self:space-around</option>
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

    function setFlexAttr() {
        var attrFlex=$(this).attr("id");
        //var valFlex=$(attrFlex).val();
        var valFlex = $("#"+attrFlex+" option:selected").val();
        console.log(attrFlex);
        console.log(valFlex);
        //$("#display option:selected").val()
        $("#container").css(attrFlex, valFlex);
    }

});