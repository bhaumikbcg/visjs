function displayCuboid(myResponse){
    console.dir("displayCuboid");
    for(var i = 0; i < myResponse.length; i++){
        var myCuboidObject = {};
        myCuboidObject.name = myResponse[i][1][1];
        myCuboidObject.id = myResponse[i][0][1];
        myCuboidObject.count = -1;
        localStorage.setItem(myCuboidObject.id, JSON.stringify(myCuboidObject));
        $('#' + wbNameData.name + wbNameData.id).append('<ul class=""><li class=""><button type="button" class="btn btn-link text-warning btn-block" onclick="goInCuboid(this)">' + myCuboidObject.name + '</button><button class="btn btn-link d-none">' + myCuboidObject.id + '</button></li></ul>');
    }
}