function goInCuboid(a){
    console.dir(a.nextSibling.innerHTML);
    var receivedCuboidId = a.nextSibling.innerHTML;
    cuboidNameData = JSON.parse(localStorage.getItem(receivedCuboidId));
    cuboidNameData.count += 1;
    localStorage.setItem(receivedCuboidId, JSON.stringify(cuboidNameData));
    cuboidNameData = JSON.parse(localStorage.getItem(receivedCuboidId));
    console.dir(cuboidNameData);
    if(cuboidNameData.count === 0){
        hierarchyName = "cuboid";
        hierarchyId = cuboidNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
    }
}