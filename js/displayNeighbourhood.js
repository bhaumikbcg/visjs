function displayNeighbourhood(myResponse){// from selectDisplay.js
    console.dir("displayNeighbourhood");
    console.dir(myResponse);
    for(var i = 0; i<myResponse.length; i++){
        if(nhNameData.id === myResponse[i][1][1]) continue;
        var myNhObject = {};//will hold the current neighbourhood object.
        if(myResponse[i][2] === undefined && myResponse[i][0][0] === "collab_id"){
            displayCollaboration(myResponse);
            break;
        } 
        else{
            myNhObject.originalName = myResponse[i][2][1];
            myNhObject.newName = solveName(myNhObject.originalName);
            myNhObject.id = myResponse[i][1][1];
            myNhObject.level = myResponse[i][0][1];
            myNhObject.count = -1;
            localStorage.setItem(myNhObject.id, JSON.stringify(myNhObject));//store the object in the browser with it's id as the key
            if(myNhObject.level === 0)//append it in the drop-down list if it is nh0
                $('#hierarchy').append('<li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myNhObject.newName + myNhObject.id +'" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myNhObject.originalName +'</button><button class="btn btn-link d-none">' + myNhObject.id + '</button></li><div class="collpase" id="' + myNhObject.newName + myNhObject.id + '"></div>');
            else //append it to the dropdown list and under the earlier nh hierarchy
                $('#' + nhNameData.newName + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myNhObject.newName + myNhObject.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myNhObject.originalName +'</button><button class="btn btn-link d-none">' + myNhObject.id + '</button></li><div class="collpase" id="' + myNhObject.newName + myNhObject.id + '"></div></ul>');
        }
    }
}