var canvas = new fabric.Canvas(document.getElementById('c'));

var rect = new fabric.Rect({
    width: 100,
    height: 100,
    left: 50,
    top: 50,
    fill: 'rgba(255,0,0,0.5)'
});
var circle = new fabric.Circle({
    radius: 50,
    left: 175,
    top: 75,
    fill: '#aac'
});

var group = new fabric.Group([rect, circle],{
    originX: 'center',
    originY: 'center'
});
canvas.add(group);
canvas.renderAll();

function getPOS(){
    var pos = rect.left + rect.group.left;
    document.getElementById("demo").innerHTML = pos;
}
