var bool = true;
function goInWhiteboard(a){
    var receivedWbId = a.nextSibling.innerHTML;
    wbNameData = JSON.parse(localStorage.getItem(receivedWbId));
    wbNameData.count += 1;
    localStorage.setItem(receivedWbId, JSON.stringify(wbNameData));
    wbNameData = JSON.parse(localStorage.getItem(receivedWbId));
    console.dir(wbNameData);
    if(bool){
        $('.toggle').removeAttr("disabled");
        $('.toggle-button').removeAttr("disabled");
        getHierarchyForUpload(wbNameData);
        bool = !bool;
    }
    else {
        $('.toggle').attr("disabled", "");
        $('.toggle-button').attr("disabled", "");
        bool = !bool;
    }
    if(wbNameData.count === 0){
        hierarchyName = "wb";
        hierarchyId = wbNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
    }
}