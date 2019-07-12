function goInCuboid(a){
    //collect the cuboidId. Use it to extract the cuboidObject which is clicked. keep a count of clicks. Update the count in the browser memory. Extract the updated object. If it hasn't been clicked before, pass it to getHierarchy function to get network of words for that cuboid.
    console.dir(a.nextSibling.innerHTML);
    var receivedCuboidId = a.nextSibling.innerHTML;
    cuboidNameData = JSON.parse(localStorage.getItem(receivedCuboidId));
    localStorage.setItem(receivedCuboidId, JSON.stringify(cuboidNameData));
    cuboidNameData = JSON.parse(localStorage.getItem(receivedCuboidId));
    console.dir(cuboidNameData);
        hierarchyName = "cuboid";
        hierarchyId = cuboidNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
}