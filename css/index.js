// create a fabricJS wrapper for canvas element
var canvas = new fabric.Canvas('c');

var imgElement = document.getElementById('blueBody');
var imgInstance = new fabric.Image(imgElement, {
});
canvas.add(imgInstance);


$( "#c" ).droppable({
    drop: function( event, ui ) {
     var pos = ui.draggable.offset();
     var rect = new fabric.Rect({
     left: pos.left,
     top: pos.top,
     fill: 'gray',
     width: 60,
     height: 30,
     borderColor: "gray",
     lockScalingY: true,
     padding: 5
   });