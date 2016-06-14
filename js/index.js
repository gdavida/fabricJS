// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c', {});
var cv = new fabric.Canvas('cv');

windowWidth = window.innerWidth / 2;
windowHeight = window.innerHeight / 2;
canvas.setWidth(windowWidth);
canvas.setHeight(windowHeight);





// add image to canvas
canvas.renderAll();
// ADD BODIES
$('#bodyRed').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/red.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyOrange').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/orange.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyYellow').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/yellow.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyGreem').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/green.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyBlue').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/blue.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyBrown').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/brown.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyTeal').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/teal.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyIndigo').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/indigo.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyTan').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/tan.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});



$('#bodyPurple').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/purple.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});



$('#bodyRainbow').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/rainbow.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyBlack').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/black.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyCoral').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/coral.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyPeach').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/peach.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyPink').click(function() {
  var image1 = new fabric.Image.fromURL("https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/pink.svg", function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});



















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



// ADD MOUSTACHE AND BEARD
$('#moustache1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache1.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#moustache2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache2.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#moustache3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache3.png', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#moustache4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache4.png', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#beard1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/beard1.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#beard2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/beard2.svg', function(oImg) {
  oImg.scale(1.0).setFlipX(true);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

// end - add extras


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

$('#cowboyHat').click(function() {
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

//   var monsterBox = document.getElementsByClassName('dropzone');
//   monsterBox = monsterBox[0];


// function chooseBody(el) {
//   var useThisId = el.getAttribute('id');
//   monsterBox.id = '';
//   monsterBox.id = useThisId;
// }

// end - adding bodies to bkgd




// CANVAS TO SVG


// $('#btn').click(function(){
//    var trsvg = canvas.toSVG();
//    var trsvg_cv = cv.toSVG();
//    var canvas_svg = new fabric.Canvas('canvas-svg');
//    $('#svg-tag').html(trsvg);
//      //alert(JSON.stringify(trsvg)); 
// fabric.loadSVGFromString( trsvg , function (objects, options) {
//      var obj = fabric.util.groupSVGElements(objects, options);
//      canvas_svg.add(obj).centerObject(obj);
//      obj.setCoords();
//      canvas_svg.calcOffset();
//      canvas_svg.renderAll();
//       //alert('sss');  
//    }); 
  
// });


// CANVAS TO SVG IN NEW WINDOW
    function saveFile() {
      window.open(document.getElementById('c').toDataURL());
    }
    document.getElementById('saveBtn').addEventListener('click', saveFile, false);
    //--------