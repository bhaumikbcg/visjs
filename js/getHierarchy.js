var response, xhr, hierarchyName = "root", hierarchyId = -1, nhNameData = {}, collabNameData = {}, wbNameData = {}, cuboidNameData = {}, url = 'http://192.168.250.23:5000/expand?expand_type=root&expand_id=-1';
nhNameData.id = -10;
$(getHierarchy(hierarchyName, hierarchyId));
function getHierarchy(hierarchyName, hierarchyId){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/expand?expand_type=' + hierarchyName + '&expand_id=' + hierarchyId, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            selectDisplay(response);
        }
    }
}