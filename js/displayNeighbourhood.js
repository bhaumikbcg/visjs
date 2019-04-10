function displayNeighbourhood(myResponse){
    for(var i = 0; i<myResponse.length; i++){
        if(nhNameData.id === myResponse[i][1][1]) continue;
        var myObject = {};
        myObject.name = myResponse[i][2][1];
        myObject.id = myResponse[i][1][1];
        myObject.level = myResponse[i][0][1];
        myObject.count = -1;
        localStorage.setItem(myObject.id, JSON.stringify(myObject));
        if(myObject.level === 0)
            $('#hierarchy').append('<li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myObject.name + myObject.id +'" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myObject.name +'</button><button class="btn btn-link d-none">' + myObject.id + '</button></li><div class="collpase" id="' + myObject.name + myObject.id + '"></div>');
        else
            $('#' + nhNameData.name + nhNameData.id).append('<ul><li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myObject.name + myObject.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="goInNeighbourhood(this)">'+ myObject.name +'</button><button class="btn btn-link d-none">' + myObject.id + '</button></li><div class="collpase" id="' + myObject.name + myObject.id + '"></div></ul>');
    }
}