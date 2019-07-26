//Stage Setup
var stage = new Konva.Stage({
    container: 'container',
    width: 1000,
    height: 600
});


//BCVM Credentials
var user;
var pwd;
var nhPath;
var membershipId;
var urlPrefix;
var wbId;
var collabId;
var name;
var description;
var id;
var gridId = null;

//Image Click to reduce bugs and draw lines
var imgclick = false;

//Mode of whether to design or annotation;
var mode = "annotation";

//Position of first click
var pos1 = null;

//Image Setup
var imagePath = null
var args;

//Konva Image Layers and Setup
var place = new Konva.Layer();
var imglayer = new Konva.Layer();
var tooltipLayer = new Konva.Layer();
stage.add(imglayer);
stage.add(place);
stage.add(tooltipLayer);
add(stage);

//Transformer Array
var trarr = [];

//Image Array
var imgarr = [];

//BCVM Setup
//gridEditor
var ge;
var ge2;

//Credentials Setup
getCreds()
let env = bcvm.Srv().CreateEnvironment({
    usr: user,
    membershipId: membershipId,
    nhPath: nhPath,
    pwd: pwd,
    urlPrefix: urlPrefix,
});
if (gridId == null) {
  ge =  env.createGridEditor({
    name: name,
    collabId: collabId,
    wbId: wbID,
    description: description,
    id: id,
    memberId: membershipId,
  });
} else {
  env.loadGridById(gridId);
  ge = env.getGridEditor(gridId);
  loadGrid();
}

//Boardwalk Columns
var columns = ge.getColumns();

//HTML DIV to add textArea for editing
var elem = document.createElement('div');
document.body.appendChild(elem);

//Access the Args
getArgs()



//Setup for the Input of the BCVM
if (gridId == null) {
  var re = ge.insertRowAtStart("ImageArgs");
  var ce = ge.insertColumnAtStart("Text");
  var p1e = ge.insertColumnAtEnd("Position1");
  ge.insertColumnAtEnd("Position2");
  let le = ge.getCellEditorRC(re.rowSequenceNo, ce.columnSequenceNo);
  if (imagePath != null) {
    le.stringValue = imagePath;
  } else {
    let le = ge.getCellEditorRC(re.rowSequenceNo, p1e.columnSequenceNo);
    le.stringValue = args.toString();
  }
}

document.getElementById('submitGrid').addEventListener('click', function() {
    env.submitGrid(ge, { critical: true, criticalLevel: 16 });
    if (imagePath == null) {
      env.submitGrid(ge2, { critical: true, criticalLevel : 16});
    }
});

document.getElementById('designMode').addEventListener('click', function() {
  mode = "design";
  stage.off('click');
  setMode(true);
});

document.getElementById('annotationMode').addEventListener('click', function() {
  mode = "annotation";
  add(stage);
  setMode(false);
});

//Changing modes
function setMode(bool) {
  var i;
  group.draggable(bool);
  console.log(imgarr);
  for (i = 0; i < trarr.length; i++) {
    if (bool == false) {
      imgarr[i].off('mouseover');
    } else {
      enableName(imgarr[i]);
    }
    trarr[i].resizeEnabled(bool);
    trarr[i].rotateEnabled(bool);
    trarr[i].borderEnabled(bool);
    imgarr[i].draggable(bool);
    imglayer.draw()
  }
}

//Tooltip
var tooltip = new Konva.Text({
        text: '',
        fontFamily: 'Calibri',
        fontSize: 12,
        padding: 5,
        textFill: 'white',
        fill: 'black',
        alpha: 0.75,
        visible: false
});

//Group
var group = new Konva.Group({
  draggable: true,
})
imglayer.add(group);
var trg = new Konva.Transformer();
trg.attachTo(group);
trarr.push(trg);
imgarr.push(group);

//Boardwalk Setup Function
function getCreds() {
  user = 'admin';
  pwd = '0';
  nhPath: 'ROOT';
  membershipId = 1000;
  urlPrefix = "https://bwrestapiqa.boardwalktech.com:8443/BW_RIPPLE/rest"
  wbID = 1020;
  collabId = 1007;
  name = 'Sample';
  description = 'Sample Annotation' + (new Date()).toISOString();
  id = -1;
  gridId = null;
}

//Loading an Existing Grid
function loadGrid() {
  var rows = ge.getRows();
  var r1 = rows[0];
  let ce = ge.getCellEditorRC(r1.rowSequenceNo, columns[0].columnSequenceNo);
  if (ce.stringValue = "") {
    ce = ge.getCellEditorRC(r1.rowSequenceNo, columns[1].columnSequenceNo);
    args = ce.stringValue;

  } else {
    imagePath = ce.stringValue;
  }
  var i;
  for (i = 1; i < rows.length; i++) {
    let ri = rows[i];
    let p1e = ge.getCellEditorRC(ri.rowSequenceNo, columns[1].columnSequenceNo);
    let p2e = ge.getCellEditorRC(ri.rowSequenceNo, columns[2].columnSequenceNo);
    let p1eArr = p1e.stringValue.split(" ");
    let p2eArr = p2e.stringValue.split(" ");
    let p1pos = {x : p1eArr[0].parseInt(), y: p1eArr[1].parseInt()}
    let p2pos = {x : p2eArr[0].parseInt(), y: p2eArr[1].parseInt()}
    textLine(p1pos, p2pos, place, false, ri);
  }
}

//Accessing Args
function getArgs() {
  //imagePath = './Images/Base.png'
  args = JSON.parse(localStorage.getItem("nameArray"));
  //args = ["Base", "Collar", "SleeveRight", "SleeveLeft", "buttons", "cuffright", "cuffleft", "pocket1", "pocket2", "pocket1", "pocket2"]
}

//Annotation Builder
function textLine(pos1, pos2, layer, isnew, re) {
  var textNode;
  var xpos = 0;
  var ypos = 5;
  var widthLimit = 150;
  var alignment = 'left';
  var stage = layer.getStage();
  var line = new Konva.Line({
    points: [pos1.x, pos1.y, pos2.x, pos2.y],
    stroke: 'black',
    strokeWidth: 2,
    lineJoin: 'round'
  });
  if (isnew == true) {
    var re = ge.insertRowAtEnd("Annotation");
    var te = ge.getCellEditorRC(re.rowSequenceNo, columns[0].columnSequenceNo);
    var pos1e = ge.getCellEditorRC(re.rowSequenceNo, columns[1].columnSequenceNo);
    var pos2e = ge.getCellEditorRC(re.rowSequenceNo, columns[2].columnSequenceNo);
    pos1e.stringValue = "" + pos1.x + " " + pos1.y;
    pos2e.stringValue = "" + pos2.x + " " + pos2.y;
    te.stringValue = " ";
    text = "";
  } else {
    var re = re;
    var te = ge.getCellEditorRC(re.rowSequenceNo, columns[0].columnSequenceNo);
    text = te.stringValue;
  }
  if (pos2.x < (stage.width())/2) {
    xpos = -10;
  }
  if (pos2.y < (stage.height())/2) {
    ypos = -20;
  }
  if ((pos2.x + xpos) + widthLimit >  stage.width()) {
    xpos = xpos + stage.width() - pos2.x - widthLimit;
  } else if ((pos2.x + xpos) < 5) {
    xpos = xpos + 10;
  }
  if ((pos2.y + ypos) < 5) {
    ypos += 10;
  }

  textNode = new Konva.Text({
    text: text,
    x: pos2.x + xpos,
    y: pos2.y + ypos,
    fontSize: 20,
    width: widthLimit,
    align: alignment
  });
  layer.add(textNode);
  layer.add(line);
  layer.draw();
  dblclick();
  if (text == "") {
    textNode.fire('dblclick');
  }
  function dblclick() {
    textNode.on('dblclick', () => {
      if (mode != "annotation") {
        return;
      }
      textNode.off('dblclick');
      var textPosition = textNode.getAbsolutePosition();
      var stageBox = stage.container().getBoundingClientRect();
      var areaPosition = {
        x: stageBox.left + textPosition.x,
        y: stageBox.top + textPosition.y
      };
      stage.off('click');
      var textarea = document.createElement('textarea');
      elem.appendChild(textarea);

      textarea.value = textNode.text();
      textarea.style.position = 'absolute';
      textarea.style.top = areaPosition.y + 'px';
      textarea.style.left = areaPosition.x + 'px';
      textarea.style.width = textNode.width();
      textarea.style.height = 6 + textNode.height() * 0.5;

      textarea.focus();

      textarea.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          textNode.text(textarea.value);
          if (textNode.text() == "") {
            textNode.remove();
            line.remove();
            ge.deleteRow(re);
          } else {
            te.stringValue = textarea.value;
            var diff = (textNode.height() + textPosition.y) - stage.height();
            if (diff > 0) {
              var yval = textPosition.y - diff;
              textNode.y(yval);
            }
          }
          layer.draw();
          elem.removeChild(textarea);
          dblclick();
          if (elem.childElementCount == 0 && mode != "design") {
            add(stage);
          }
        }
      });
    });
  }
}

//Image Setup
function imageCreator(x, y, path, draggable, name) {
  var imageObj = new Image();
  imageObj.onload = function() {
      flat = new Konva.Image({
        name: name,
        x: x,
        y: y,
        image: imageObj,
        width: imageObj.width,
        height: imageObj.height,
        draggable: draggable
      });
      var tr = new Konva.Transformer();
      tr.attachTo(flat);
      enableName(flat);
      group.add(flat);
      group.add(tr);
      imglayer.draw();
      imgarr.push(flat);
      trarr.push(tr);
      console.log(group);
  };
  imageObj.src = path;
}

function enableName(image) {
  image.on('mouseover', function() {
        var mousePos = stage.getPointerPosition();
        tooltip.position({
          x: mousePos.x + 5,
          y: mousePos.y + 5
        });
        tooltip.text(image.name());
        tooltip.show();
        tooltipLayer.batchDraw();
      });
}

//To Use Image Builder or Design
if (imagePath == null) {
  design(args)
} else {
  imageObj = new Image();
  imageObj.onload = function() {
      konvaImage = new Konva.Image({
        y: (stage.height() - 300)/2,
        x: (stage.width() - 300)/2,
        image: imageObj,
        width: 300,
        height: 300
      });
      imglayer.add(konvaImage);
      imglayer.draw();
    };
  imageObj.src = imagePath;
}

//Building a design
function design(array) {
  filePath = getFilePath(array);
  positions = getDimensions(array);
  for (i = 0; i < args.length; i++) {
    holder = positions[i];
    imageCreator(holder[0], holder[1], filePath[i], true, array[i])
  }
}

//Holder for getting File Path
function getFilePath(args) {
  function converter(txt, index, array) {
    return "./Images/" + txt + ".png";
  }
  arr = args.map(converter);
  return arr;
}

//Dimensions Map that has not yet been set
function getDimensions(args) {
  function dimensions(txt, index, array) {
    return [275, 75];
  }
  arr = args.map(dimensions);
  return arr;
}

//Check whether the click is within the image size
function withinImg(pos) {
  if (pos.x - 350 >= 0 && pos.x - 350 <= 300
    && pos.y - 150 >= 0 && pos.y - 150 <= 300) {
      return true;
  } else {
    return false;
  }
}

//Allow to draw line on stage
function add(stage) {
  stage.on('click', () => {
    var mousePos = stage.getPointerPosition();
    if (imgclick == false && withinImg(mousePos)) {
      pos1 = mousePos;
      imgclick = true;
    } else if (imgclick == true && !withinImg(mousePos)) {
      textLine(pos1, mousePos, place, true, null);
      imgclick = false;
      pos1 = null;
    } else {
      imgclick = false;
      pos1 = null;
    }
  });
}
