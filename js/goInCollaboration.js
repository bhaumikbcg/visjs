function goInCollaboration(a){//from displayCollaboration.js
    //collect the collabid. Use it to extract the collabObject which is clicked. keep a count of clicks. Update the count in the browser memory. Extract the updated object. If it hasn't been clicked before, pass it to getHierarchy function to get list of whiteboards under that particular collaboration.
    var receivedCollabId = a.nextSibling.innerHTML;
    collabNameData = JSON.parse(localStorage.getItem(receivedCollabId));
    collabNameData.count += 1;
    localStorage.setItem(receivedCollabId, JSON.stringify(collabNameData));
    collabNameData = JSON.parse(localStorage.getItem(receivedCollabId));
    console.dir(collabNameData);
    if(collabNameData.count === 0){
        hierarchyName = "collab";
        hierarchyId = collabNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
    }
}