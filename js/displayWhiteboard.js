function displayWhiteboard(myResponse){//from selectDisplay.js
    console.dir("displayWB");
    for(var i = 0; i < myResponse.length; i++){
        var myWBObject = {};
        myWBObject.originalName = myResponse[i][1][1];
        myWBObject.newName = solveName(myWBObject.originalName);
        myWBObject.id = myResponse[i][0][1];
        myWBObject.count = -1;
        localStorage.setItem(myWBObject.id, JSON.stringify(myWBObject));
        console.dir(myWBObject);
        console.dir(collabNameData);
        //attach wb to its collab object and each <li> (wb) will have a link to go into the wb hierarchy which will in turn give us a list of cuboids
        $('#' + collabNameData.newName + collabNameData.id).append('<ul><li><button type="button" class="btn btn-link text-danger" onclick="goInWhiteboard(this)" data-toggle="collapse" data-target="#' + myWBObject.newName + myWBObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myWBObject.originalName + '</button><button class="btn btn-link d-none">' + myWBObject.id + '</button></li><div class="collapse" id="' + myWBObject.newName + myWBObject.id + '"></div></ul>');
    }
}