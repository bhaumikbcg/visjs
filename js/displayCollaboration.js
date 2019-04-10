function displayCollaboration(myResponse){
    for(var i = 1; i < myResponse.length; i++){
        var myCollabObject = {};
        myCollabObject.name = myResponse[i][1][1];
        myCollabObject.id = myResponse[i][0][1];
        myCollabObject.count = -1;
        localStorage.setItem(myCollabObject.id, JSON.stringify(myCollabObject));
        $('#' + nhNameData.name + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link text-success" onclick="goInCollaboration(this)" data-toggle="collapse" data-target="#' + myCollabObject.name + myCollabObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myCollabObject.name + '</button><button class="btn btn-link d-none">' + myCollabObject.id + '</button></li><div class="collapse" id="' + myCollabObject.name + myCollabObject.id + '"></div></ul>');
    }
}