var response, xhr, hierarchyName = "root", hierarchyId = -1, nhNameData = {}, collabNameData = {}, wbNameData = {}, cuboidNameData = {};
nhNameData.id = -10;
$(getHierarchy(hierarchyName, hierarchyId));//self calling function. Calls itself when the sreen is first loaded. //after that the function is called using goInNeighbourhood, goInCollab, goInWb, goInCuboid etc
function getHierarchy(hierarchyName, hierarchyId){//called by goInWhiteBoard.js and other files
    var url = 'expand?expand_type=' + hierarchyName + '&expand_id=' + hierarchyId;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/' + url, true);//send request to get data from the server
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            if(hierarchyId === '1176') getFilterCuboids(response);
            else selectDisplay(response);
        }
    }
}