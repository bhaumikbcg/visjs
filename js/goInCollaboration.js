function goInCollaboration(a){
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