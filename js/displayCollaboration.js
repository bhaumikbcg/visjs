function displayCollaboration(myResponse){
    console.dir("displayCollab");
    for(var i = 1; i < myResponse.length; i++){
        var myCollabObject = {};
        myCollabObject.originalName = myResponse[i][1][1];
        myCollabObject.newName = solveName(myCollabObject.originalName);
        myCollabObject.id = myResponse[i][0][1];
        myCollabObject.count = -1;
        localStorage.setItem(myCollabObject.id, JSON.stringify(myCollabObject));
        $('#' + nhNameData.newName + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link text-success" onclick="goInCollaboration(this)" data-toggle="collapse" data-target="#' + myCollabObject.newName + myCollabObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myCollabObject.originalName + '</button><button class="btn btn-link d-none">' + myCollabObject.id + '</button></li><div class="collapse" id="' + myCollabObject.newName + myCollabObject.id + '"></div></ul>');
    }
}