function displayCuboid(myResponse){
    for(var i = 0; i < myResponse.length; i++){
        var myCuboidObject = {};
        myCuboidObject.name = myResponse[i][1][1];
        myCuboidObject.id = myResponse[i][0][1];
        myCuboidObject.count = -1;
        localStorage.setItem(myCuboidObject.id, JSON.stringify(myCuboidObject));
        $('#' + wbNameData.name + wbNameData.id).append('<ul><li><button type="button" class="btn btn-link text-warning" onclick="goInWhiteboard(this)" data-toggle="collapse" data-target="#' + myCuboidObject.name + myCuboidObject.id + '" aria-expanded="false" aria-controls="collapseExample">' + myCuboidObject.name + '<button class="btn btn-link d-none">' + myCuboidObject.id + '</button></button></li><div class="collapse" id="' + myCuboidObject.name + myCuboidObject.id + '"></div></ul>');
    }
}