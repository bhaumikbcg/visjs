var response, xhr, hierarchyName = "root", hierarchyId = -1, nhNameData = {}, collabNameData = {}, wbNameData = {}, cuboidNameData = {}, url = 'http://192.168.250.23:5000/expand?expand_type=root&expand_id=-1';
nhNameData.id = -10;
$(getHierarchy(hierarchyName, hierarchyId));//self calling function. Calls itself when the sreen is first loaded. //after that the function is called using goInNeighbourhood, goInCollab, goInWb, goInCuboid etc
function getHierarchy(hierarchyName, hierarchyId){//initially search with root and id -1
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/expand?expand_type=' + hierarchyName + '&expand_id=' + hierarchyId, true);//open the gateway to server
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);//record the response
            selectDisplay(response);
        }
    }
}