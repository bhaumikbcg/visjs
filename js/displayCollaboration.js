function displayCollaboration(myResponse){//from selectDisplay.js
    console.dir(myResponse);
    console.dir("displayCollab");
    for(var i = 1; i < myResponse.length; i++){
        var myCollabObject = {};//create a collab object to hold all the current objects
        if(myResponse[i][0][0] !== "collab_id") continue
        else{
            myCollabObject.originalName = myResponse[i][1][1];
            myCollabObject.newName = solveName(myCollabObject.originalName);//remove blank spaces and ampersand sign and replace them with 'x'
            myCollabObject.id = myResponse[i][0][1];
            myCollabObject.count = -1;
            localStorage.setItem(myCollabObject.id, JSON.stringify(myCollabObject));
            //attach collab to its nh object and each <li> (collab) will have a link to go into the collab hierarchy which will in turn give us a list of whiteboards
            $('#' + nhNameData.newName + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link text-success" onclick="goInCollaboration(this)" data-toggle="collapse" data-target="#' + myCollabObject.newName + myCollabObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myCollabObject.originalName + '</button><button class="btn btn-link d-none">' + myCollabObject.id + '</button></li><div class="collapse" id="' + myCollabObject.newName + myCollabObject.id + '"></div></ul>');
        }
    }
}