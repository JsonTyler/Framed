function loadData(form) {
//Background Pattern/Color changer JS portion
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
  $("select, #container, #add-shape").css('background-size', 'form.wallWidth.value');
  $("select, #container, #add-shape").css('color', 'transparent');
  $("select, #container, #add-shape").css('font-style', 'bold');

}

});


//Frame Changes
$('select').change(function(){
if($(this).val() == 'add-shape'){
  addShape();

}
if($(this).val() == 'another-shape'){
  anotherShape();

}
});


  var test = form.wallWidth.value;
  console.log(test);

  var ugh = document.getElementById('container');
  console.log(ugh);
  ugh.style.width = test + 'px';
  console.log(ugh.style.width);

  var control = document.getElementById('controlPanel');
  console.log(control);
//Creating Stage
  var stage = new Konva.Stage({

    container: "container",
    width: test,
    height: 480,
});

//Original Size
jQuery("#add-shape").click(function() {
  addShape();
});

var addShape = function() {
  console.log("add shape");
  var layer = new Konva.Layer();

  var group = new Konva.Group({
    draggable: true
  });

  var tooltipLayer = new Konva.Layer();

  var parentContainer = new Konva.Rect({
    x: 50,
    y: 50,
    width: 76.8,
    height: 96,
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


//NEW Size
jQuery("#another-shape").click(function() {
  anotherShape();
});

var anotherShape = function() {
  console.log("another shape");
  var layer = new Konva.Layer();

  var group = new Konva.Group({
    draggable: true
  });

  var tooltipLayer = new Konva.Layer();

  var parentContainer = new Konva.Rect({
    x: 50,
    y: 50,
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
