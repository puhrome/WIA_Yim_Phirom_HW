/*
     Name: Phirom Yim
     Date: 6/1/2015
     Class & Section:  WIA-01
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
            //start path
            //move point
            ctx3.beginPath();

            ctx3.moveTo(100, 100); //100 right 100 down
            ctx3.moveTo(200, 70); //top right point
            ctx3.lineTo(140, 120); //right peak
            ctx3.lineTo(180, 205); //bottom right point
            ctx3.lineTo(100, 170); //bottom peak
            ctx3.lineTo(20, 205); //left point
            ctx3.lineTo(50, 120); //left peak
            ctx3.lineTo(0, 70); //top left point
            ctx3.lineTo(75, 70);
            ctx3.lineTo(100,5);
            ctx3.lineTo(120, 70);
            ctx3.lineTo(200,70);

            //close path
            ctx3.closePath();
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

    var theCanvas4 = document.getElementById("Canvas4");

    if(theCanvas4 && theCanvas4.getContext){

        var ctx4 = theCanvas4.getContext("2d");

        if(ctx4){
        ctx4.beginPath();
        ctx4.moveTo(87, 296);
        ctx4.bezierCurveTo(128, 259, 162, 246, 198, 301);
        ctx4.bezierCurveTo(219, 333, 222, 196, 335, 303);
        ctx4.bezierCurveTo(359, 326, 339, 212, 439, 304);
        ctx4.bezierCurveTo(457, 321, 278, 3, 88, 296);
        ctx4.stroke();
        }
    }

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

//Draw text here
    // Outlined text
    var theCanvas5 = document.getElementById("Canvas5");
    if (theCanvas5 && theCanvas5.getContext) {
        var ctx5 = theCanvas5.getContext("2d");

        ctx5.font = "50px Helvetica";
        ctx5.strokeText("Why, hello!", 5, 50);
    }

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
        var theCanvas6 = document.getElementById('Canvas6');
        if (theCanvas6 && theCanvas6.getContext) {
            var ctx6 = theCanvas6.getContext("2d");
            if (ctx6) {

                //Create a variable to hold our image
                var  srcImg = document.getElementById("img1");

                //Draw an image directly onto the canvas
                ctx6.drawImage(srcImg, 0,0);

                //Draw a scaled down image
                ctx6.drawImage(srcImg, 0, 150, 330, 110);

                //Draw a slice image
                ctx6.drawImage(srcImg, 360, 90, 600, 600, 0, 1000, 400, 400 );

            }
        }


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here
    var theCanvas7 = document.getElementById('Canvas7');
    if(theCanvas7 && theCanvas7.getContext){

        var ctx7 = theCanvas7.getContext("2d");
        if(ctx7){

        ctx7.rect(20, 40, 200, 300);
        ctx7.shadowColor = '#999';
        ctx7.shadowBlur = 20;
        ctx7.shadowOffsetX = 15;
        ctx7.shadowOffsetY = 15;
        ctx7.fill();
        ctx7.fillRect = "red";


            var rotation = 0;

            var width = 50;
            var height = 50;

            ctx7.translate(theCanvas7.width/2, theCanvas7.height/2);

            setInterval(function(){

                rotation +=8;

                ctx7.clearRect(-100, -100, theCanvas7.width, theCanvas7.height);

                ctx7.rotate(rotation * (Math.PI /180));

            }, 1000);

            ctx7.strokeStyle = "black";
            ctx7.stroke();


        }
    }

}; //end of function