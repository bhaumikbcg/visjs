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
// function passResponse(myResponse){
//     for(var i = 0; i<myResponse.length; i++){
//         if(myResponse[i][2][1] === "ROOT" || nhNameData.id === myResponse[i][1][1]) continue;
//         var myObject = {};
//         nhName = myResponse[i][2][1];
//         myObject.name = nhName;
//         myObject.id = myResponse[i][1][1];
//         myObject.level = myResponse[i][0][1];
//         localStorage.setItem(nhName, JSON.stringify(myObject));
//         if(myResponse[i][0][1] === 0)
//             $('#hierarchy').append('<li id="' + myResponse[i][2][1] + '"><button type="button" class="btn btn-link" onclick="goInHierarchy(this)">'+myResponse[i][2][1]+'</button></li>');
//         else
//             $('#' + nhNameData.name).append('<ul><li id="' + myResponse[i][2][1] + '"><button type="button" class="btn btn-link" onclick="goInHierarchy(this)">'+myResponse[i][2][1]+'</button></li></ul>');
//     }
// }
//myResponse[i][2][1] === "ROOT" ||
function passResponse(myResponse){
    if(myResponse[1] !== undefined && myResponse[1][0][0] === "collab_id") displayCollaboration(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "wb_id") displayWhiteboard(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "cuboid_id") displayCuboid(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0] === "cuboid" && myResponse[1][2][1] === "Document") displayNodes(myResponse);
    else displayNeighbourhood(myResponse);
}