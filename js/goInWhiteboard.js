var bool = true;
//collect the whiteboardId. Use it to extract the wbObject which is clicked. keep a count of clicks. Update the count in the browser memory. Extract the updated object. If it hasn't been clicked before, pass it to getHierarchy function to get list of cuboids under that particular whiteboard.
function goInWhiteboard(a){//from displayWhiteboard.js
    var receivedWbId = a.nextSibling.innerHTML;
    wbNameData = JSON.parse(localStorage.getItem(receivedWbId));
    wbNameData.count += 1;
    localStorage.setItem(receivedWbId, JSON.stringify(wbNameData));
    wbNameData = JSON.parse(localStorage.getItem(receivedWbId));
    console.dir(wbNameData);
    if(bool){//toggle on the li element to enable or disable the button which is used to upload the documents
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