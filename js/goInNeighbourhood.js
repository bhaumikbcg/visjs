function goInNeighbourhood(a){
    var receivedNhId = a.nextSibling.innerHTML;
    nhNameData = JSON.parse(localStorage.getItem(receivedNhId));
    nhNameData.count += 1;
    localStorage.setItem(receivedNhId, JSON.stringify(nhNameData));
    nhNameData = JSON.parse(localStorage.getItem(receivedNhId));
    console.dir(nhNameData);
    if(nhNameData.count === 0){
        hierarchyName = "nh_level";
        hierarchyId = nhNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
    }
}