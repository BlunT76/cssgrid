$(document).ready(function () {
    var divcount=0;
      $(".divs").click(function () {

        var selection = $(this).attr("value");
        if (selection === "add") {
            divcount++;
            //$("#container").append(htmlarray.join(''))
            //console.log(htmlarray.join(''))
            $("#container").append('<div id="divjq' + divcount + '" class="border border-light divjq"><h3>' + divcount + '</h3><span>grid-column-start</span><input class="colstart" type="number" value="0" ><p></p><span>grid-column-end</span><input class="colend" type="number" value="0" ><p></p><span>grid-row-start</span><input class="rowstart" type="number" value="0" ><p></p><span>grid-row-end</span><input class="rowend" type="number" value="0" ></div>');

        } else {
            if (divcount > 0) {
                $("#gridstart" + divcount).remove();
                $("#divjq" + divcount).remove();
                divcount--;
            }
        }
    });  
    
});