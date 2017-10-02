/*
Loads data from the html form in index.html into script.js
Used for:
  - container width
  - container height
 */
function loadData(form) {



 /*
Background changer for stage & select drop down boxes.
  Available Backgrounds:
    - blueWall
    - brick
    - whiteBrick
    - whiteWall
    - wood
    - whiteSwirl
  */
  $('select').change(function(){
    if($(this).val() == 'A'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/blueWall.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
    if($(this).val() == 'B'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/brick.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
    if($(this).val() == 'C'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/whiteBrick.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
    if($(this).val() == 'D'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/whiteWall.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
    if($(this).val() == 'E'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/wood.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
    if($(this).val() == 'F'){
      $("select, #container, #add-shape").css('background-image', 'url(assets/css/img/whiteSwirl.jpg)');
      $("select, #container, #add-shape").css('background-size', 'cover');
      $("select, #container, #add-shape").css('color', 'transparent');
      $("select, #container, #add-shape").css('font-style', 'bold');

    }
  });



/*
Frame Changer for select drop down box
  Available Frame Sizes:
    - 4 x 6
    - 5 x 7
    - 6 x 8
    - 10 x 13
    - 11 x 14
    - 16 x 20
    - 18 x 24
    - 20 x 24
    - 24 x 30
    - 24 x 36

Warning: To select the same frame size more than once, you must choose the
blank option to reset the choice. Once that is done you can then select the
frame size again.
 */
$('select').change(function(){

  if($(this).val() == 'add-shape'){
    addShape();
  }

  if($(this).val() == 'another-shape'){
    anotherShape();
  }

});



/*
1. Grabbing the width of the #container based on input (form.wallWidth.value)
from the html form in index.html.
Cannot put them in a function due to the need to have them global so that
they can be pulled into the Konva.Stage below.

2.  Grabbing the height of the #container based on input (form.wallHeight.value)
from the html form in index.html.
Cannot put them in a function due to the need to have them global so that
they can be pulled into the Konva.Stage below

3. Creating a variable 'control' that acts as a holder for my buttons and
drop down boxes. Below I add it to a layer so the background doesnt cover it
and to do that I have to call it from index.html into script.js
 through --> document.getElementById('controlPanel').
 */
  var width = form.wallWidth.value;
  var height = form.wallHeight.value;

  var container = document.getElementById('container');

  container.style.width = width + 'px';
  container.style.height = height + 'px';

  var control = document.getElementById('controlPanel');



/*
1.Created a variable named 'stage' that creates a new Konva.Stage, notice here
the container is referencing the html div id #container in index.html.

2. The 'width: width' is referencing up above.

3. The 'height: height' is referencing up above
 */
  var stage = new Konva.Stage({

    container: "container",
    width: width,
    height: height,
});



/*
Adding a click function for when the user clicks on the drop down box and
selects #add-shape then the function addShape() will be triggered
 */
jQuery("#add-shape").click(function() {
  addShape();
});



/*
Function addShape(): Encompasses a function that on click will create a frame
(w/ var parentContainer & var circle) on the stage.

Function cirlce.on(): Acts as the marker for the frame (parentContainer). On
click it triggers the tooltip to be printed on the frame.

Var parentContainer creates a new Konva.Rect that acts as the frame

Var circle creates a new Konva.Circle that I attached to the the parentContainer
to act as a nail and a marker.

Var tooltip creates a text layer that I use to display the tooltip
 */
var addShape = function() {
  var layer = new Konva.Layer();

  var group = new Konva.Group({
    draggable: true
  });

  var tooltipLayer = new Konva.Layer();

  var parentContainer = new Konva.Rect({
    x: 200,
    y: 200,
    width: 40,
    height: 60,
    fill: '#65666c',
    stroke: '#3c1704',
    strokeWidth: 15,
    ShadowOffsetX: -7,
    ShadowOffsetY: 4,
    ShadowBlur: 10,
    opacity: .9,
    draggable: false
  });

  var circle = new Konva.Circle({
    x: parentContainer.getWidth()/2 + 50,
    y: parentContainer.getHeight() - 49,
    radius: 5,
    fill: 'black',
    stroke: 'grey',
    strokeWidth: '2',
    draggable: false
  });

  //Creating tooltipOne
  var tooltip = new Konva.Text({
    text: "",
    fontFamily: "Calibri",
    fontStyle: "bold",
    fontSize: 10,
    padding: 5,
    visible: false,
    fill: "white",
    opacity: 0.75,
    textFill: "white"
  });

  group.add(parentContainer, circle);
  layer.add(group);

  tooltipLayer.add(tooltip);

  stage.add(layer);
  stage.add(tooltipLayer);

  circle.on('click', function() {

    var mousePos = stage.getPointerPosition();
    tooltip.position({
      x: mousePos.x - 25,
      y: mousePos.y + 20
    });
    tooltip.text("Left: " + (stage.width() - (stage.width() - stage.getPointerPosition().x)) + "\n" +
      "Right: " + (stage.width() - stage.getPointerPosition().x) + "\n" +
      "Top: " + (stage.height() - (stage.height() - stage.getPointerPosition().y)) + "\n" +
      "Bottom: " + (stage.height() - stage.getPointerPosition().y)
    );
    tooltip.show();
    tooltipLayer.batchDraw();
  });
}



/*
Adding a click function for when the user clicks on the drop down box and
selects #another-shape then the function anotherShape() will be triggered
 */
jQuery("#another-shape").click(function() {
  anotherShape();
});



/*
Function anotherShape(): Encompasses a function that on click will create a frame
(w/ var parentContainer & var circle) on the stage.

Function cirlce.on(): Acts as the marker for the frame (parentContainer). On
click it triggers the tooltip to be printed on the frame.

Var parentContainer creates a new Konva.Rect that acts as the frame

Var circle creates a new Konva.Circle that I attached to the the parentContainer
to act as a nail and a marker.

Var tooltip creates a text layer that I use to display the tooltip
 */
var anotherShape = function() {
  console.log("another shape");
  var layer = new Konva.Layer();

  var group = new Konva.Group({
    draggable: true
  });

  var tooltipLayer = new Konva.Layer();

  var parentContainer = new Konva.Rect({
    x: 200,
    y: 200,
    width: 48,
    height: 67.2,
    fill: '#65666c',
    stroke: '#3c1704',
    strokeWidth: 15,
    ShadowOffsetX: -7,
    ShadowOffsetY: 4,
    ShadowBlur: 10,
    opacity: .9,
    draggable: false
  });

  var circle = new Konva.Circle({
    x: parentContainer.getWidth()/2 + 50,
    y: parentContainer.getHeight() - 50,
    radius: 8,
    fill: 'black',
    stroke: 'grey',
    strokeWidth: '3',
    draggable: false
  });

  //Creating tooltipOne
  var tooltip = new Konva.Text({
    text: "",
    fontFamily: "Calibri",
    fontSize: 15,
    padding: 5,
    visible: false,
    fill: "black",
    opacity: 0.75,
    textFill: "white"
  });



  group.add(parentContainer, circle);
  layer.add(group);

  tooltipLayer.add(tooltip);

  stage.add(layer);
  stage.add(tooltipLayer);

  circle.on('click', function() {

    var mousePos = stage.getPointerPosition();
    tooltip.position({
      x: mousePos.x,
      y: mousePos.y
    });
    tooltip.text("Left: " + (stage.width() - (stage.width() - stage.getPointerPosition().x)) + "\n" +
      "Right: " + (stage.width() - stage.getPointerPosition().x) + "\n" +
      "Top: " + (stage.height() - (stage.height() - stage.getPointerPosition().y)) + "\n" +
      "Bottom: " + (stage.height() - stage.getPointerPosition().y)
    );
    tooltip.show();
    tooltipLayer.batchDraw();
  });
}
}
