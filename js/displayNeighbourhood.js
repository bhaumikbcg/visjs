function displayNeighbourhood(myResponse){
    console.dir("displayNeighbourhood");
    for(var i = 0; i<myResponse.length; i++){
        if(nhNameData.id === myResponse[i][1][1]) continue;
        var myNhObject = {};
        myNhObject.name = myResponse[i][2][1];
        myNhObject.id = myResponse[i][1][1];
        myNhObject.level = myResponse[i][0][1];
        myNhObject.count = -1;
        localStorage.setItem(myNhObject.id, JSON.stringify(myNhObject));
        if(myNhObject.level === 0)
            $('#hierarchy').append('<li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myNhObject.name + myNhObject.id +'" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myNhObject.name +'</button><button class="btn btn-link d-none">' + myNhObject.id + '</button></li><div class="collpase" id="' + myNhObject.name + myNhObject.id + '"></div>');
        else
            $('#' + nhNameData.name + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myNhObject.name + myNhObject.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myNhObject.name +'</button><button class="btn btn-link d-none">' + myNhObject.id + '</button></li><div class="collpase" id="' + myNhObject.name + myNhObject.id + '"></div></ul>');
    }
}