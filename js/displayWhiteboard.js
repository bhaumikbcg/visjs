function displayWhiteboard(myResponse){
    console.dir("displayWB");
    for(var i = 0; i < myResponse.length; i++){
        var myWBObject = {};
        myWBObject.name = myResponse[i][1][1];
        myWBObject.id = myResponse[i][0][1];
        myWBObject.count = -1;
        localStorage.setItem(myWBObject.id, JSON.stringify(myWBObject));
        $('#' + collabNameData.name + collabNameData.id).append('<ul><li><button type="button" class="btn btn-link text-danger" onclick="goInWhiteboard(this)" data-toggle="collapse" data-target="#' + myWBObject.name + myWBObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myWBObject.name + '</button><button class="btn btn-link d-none">' + myWBObject.id + '</button></li><div class="collapse" id="' + myWBObject.name + myWBObject.id + '"></div></ul>');
    }
}