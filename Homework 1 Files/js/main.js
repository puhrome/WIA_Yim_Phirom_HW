/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function() {

    var theCanvas = document.getElementById("Canvas1");
    //theCanvas.width = 150;
    //theCanvas.height = 150;

//RETRIEVE FIRST!!!!

//DRAW SECOND!!!!
    if (theCanvas) {
        //retrieve context
        var ctx = theCanvas.getContext("2d");

        if (ctx) {
            //draw here
            //draw a stroked rectangle
            ctx.beginPath();
            ctx.rect(0, 0, 50, 100);

            //set style

            //set the fill style
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, 0, 50, 100);

            //set stroke style
            ctx.strokeStyle = "black";
            ctx.stroke();
        }

    }
    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


//Draw Circle here
        var theCanvas2 = document.getElementById('Canvas2');
        if(theCanvas2 && theCanvas2.getContext){
            var ctx2 = theCanvas2.getContext("2d");
            if (ctx2) {

                ctx2.fillStyle = "red";
                ctx2.strokeStyle = "black";
                ctx2.lineWidth = 1;

                //Full Circle
                var degrees = 180;
                var radius = 20;

                ctx2.beginPath();
                //context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                ctx2.arc(50, 50, 30, 0, 2 * Math.PI, false);
                ctx2.fill();
                ctx2.stroke();


            }
        }
    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById("Canvas3");
    if(theCanvas3 && theCanvas3.getContext){
        var ctx3 = theCanvas3.getContext("2d");
        if(ctx3){

            ctx3.beginPath();

            ctx3.moveTo(100,100);
            ctx3.lineTo(50, 50);
            ctx3.moveTo(150, 100);
            ctx3.lineTo(150, 50);

            ctx3.fill();
            ctx3.stroke();
        }

    }


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

//Draw Umbrella top here

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here




}; //end of function