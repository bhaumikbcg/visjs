function displayCuboid(myResponse){//from selectDisplay.js
    console.dir("displayCuboid");
    for(var i = 0; i < myResponse.length; i++){
        var myCuboidObject = {};
        myCuboidObject.originalName = myResponse[i][1][1];
        myCuboidObject.newName = solveName(myCuboidObject.originalName);
        myCuboidObject.id = myResponse[i][0][1];
        myCuboidObject.count = -1;
        //attach cuboid to its wb object and each <li> (cuboid) will have a link to go into the wb hierarchy which will in turn give us a list of cuboids. data-target attribute is not required here since we won't be attaching anything to the cuboid. Cuboid is the last object in the list of hierarchies
        localStorage.setItem(myCuboidObject.id, JSON.stringify(myCuboidObject));
        $('#' + wbNameData.newName + wbNameData.id).append('<ul class=""><li class=""><button type="button" class="btn btn-link text-warning btn-block" onclick="goInCuboid(this)">' + myCuboidObject.originalName + '</button><button class="btn btn-link d-none">' + myCuboidObject.id + '</button></li></ul>');
    }
}