// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c', {});
windowWidth = window.innerWidth / 2;
windowHeight = window.innerHeight / 2;
canvas.setWidth(windowWidth);
canvas.setHeight(windowHeight);





// add image to canvas
canvas.renderAll();
// ADD EYES
$('#eyes1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes1.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes2.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes3.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes4.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes5').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes5.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes6').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes6.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

// ADD MOUTHS
$('#mouth1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth1.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth2.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth3.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth4.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth5').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth5.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth6').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth6.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});
// end - adding images to canvas



// ADD EXTRAS LIKE HORNS AND HATS
$('#horn1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/horns1.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#horn2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/horns2.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#tiara').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/tiara.png', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#pinkFancyHat').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/pinkFancyHat.png', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#pirateHat').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/pirateHat.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#tiara').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/cowboyHat.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

// end - add extras


// add bodies to bkgd of canvas

function chooseBody(el) {
  var useThisId = el.getAttribute('id');
  var monsterBox = document.getElementsByClassName('dropzone');
  monsterBox = monsterBox[0];
  monsterBox.id = '';
  monsterBox.id = useThisId;
}

// end - adding bodies to bkgd