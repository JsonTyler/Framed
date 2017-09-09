var canvas = new fabric.Canvas('c');

canvas.setBackgroundImage('http://livingstyle.pl/media/products/77e7291e9441461753/images/thumbnail/big_41461753.jpg?lm=1465594739', canvas.renderAll.bind(canvas));
$("#text").on("click", function(e) {
text = new fabric.Text($("#text").val(), { left: 100, top: 100 });
	  canvas.add(text);
});
$("#rect").on("click", function(e) {
  	rect = new fabric.Rect({
    left: 40,
    top: 40,
    width: 50,
    height: 50,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 5,
			  });
  canvas.add(rect);
});

var rect = new fabric.Rect({
    originX: 'top',
    originY: 'top',
    width: 150,
    height: 120,
    fill: 'rgba(255,0,0,0.5)',

});

var text = new fabric.Text('canvas.width', {
	fontSize: 30,
	left: 'top',
	top: 'top'
});

var group = new fabric.Group([rect, text], {
	left: 0,
	top: 0,
	selectable: false,
	visible: false
});
canvas.add(group);
canvas.renderAll();

canvas.on('mouse:move', function(e) {
	var p = canvas.getPointer(e.e);
	group.set({
		left: p.x,
		top: p.y,
		visible: true
	});
	canvas.renderAll();
});

canvas.on('mouse:out', function(e) {
	group.set({
		visible: false
	});
	canvas.renderAll();
});

$("#save").on("click", function(e) {
  	$(".save").html(canvas.toSVG());
});
