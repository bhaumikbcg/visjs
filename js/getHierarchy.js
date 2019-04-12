var response;
var xhr;
var hierarchyName = "root";
var hierarchyId = -1;
var nhName;
var nhNameData = {};
nhNameData.id = -10;
var collabNameData = {};
var wbNameData = {};
var cuboidNameData = {};
var url = 'http://192.168.250.23:5000/expand?expand_type=root&expand_id=-1';
$(getHierarchy(hierarchyName, hierarchyId));
function getHierarchy(hierarchyName, hierarchyId){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/expand?expand_type=' + hierarchyName + '&expand_id=' + hierarchyId, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            passResponse(response);
        }
    }
}
function passResponse(myResponse){
    if(myResponse[1] !== undefined && myResponse[1][0][0] === "collab_id") displayCollaboration(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "wb_id") displayWhiteboard(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "cuboid_id") displayCuboid(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0] === "cuboid" && myResponse[1][2][1] === "Document") displayNodes(myResponse);
    else displayNeighbourhood(myResponse);
}