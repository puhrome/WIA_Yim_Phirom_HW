/**
 * Created by puhrome on 6/14/15.
 */

//FullPage.js anchors
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ["#fff","#fff", "#fff", "#fff", "#fff", "#fff"],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastpage', 'quote'],
        menu: '#menu',
        scrollingSpeed: 1000
    });
});
//Jquery Toggle
$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});
//easy Pie Chart

$(function() {
    $('.chart').easyPieChart({
    });
});
//html5 canvas

window.onload = function() {
//Draw images
var theCanvas = document.getElementById('myCanvas');
if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {

        //Create a variable to hold image
        var  srcImg = document.getElementById("img1");

        //Draw image
        ctx.drawImage(srcImg, 0, -100);

        //Scale image

    }
}
//Draw text here
// Outlined text
var theCanvas2 = document.getElementById("myCanvas2");
if (theCanvas2 && theCanvas2.getContext) {
    var ctx2 = theCanvas2.getContext("2d");
    if(ctx2) {
        ctx2.font = "120px Damion"; //set font size and style
        ctx2.fillStyle ="#ffffff";
        ctx2.fillText('" Real men bake "', 330, 400); // set string, and x,y position
    } // end of ctx5
} // end of if for theCanvas5 context

};

//Jquery Ease in

$( document ).click(function() {
    $( "#toggle" ).toggle( "slide" );
});



//Jquery Tooltip

$(".masterTooltip").hover(function() {
    //Hover over code
    var title = $(this).attr("title");
    $(this).data("tipText", title).removeAttr("title");
    $('<p class="tooltip"></p>')
        .text(title)
        .appendTo("body")
        .fadeIn("slow");
}, function() {
    //hover out code
    $(this).attr("title", $(this).data("tipText"));
    $('.tooltip').remove();
}).mousemove(function(e) {
    var mousex = e.pageX + 100; // Get X coordinate
    var mousey = e.pageY + 1; // Get Y coordinate
    $('.tooltip').css({top: mousey, left: mousex})
});
