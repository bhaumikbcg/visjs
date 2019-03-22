var nh_name = [];
var nh_id = [];
var nh_level = [];
var response;
var xhr;
var neighbourhoodName = "root";
var neighbourhoodId = -1;
var level0 = {};
var level1 = {};
var level2 = {};
var level3 = {};
var url = 'http://192.168.250.23:5000/expand?expand_type=root&expand_id=-1';
$(getHierarchy(neighbourhoodName, neighbourhoodId));
function getHierarchy(neighbourhoodName, neighbourhoodId){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/expand?expand_type=' + neighbourhoodName + '&expand_id=' + neighbourhoodId, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            passResponse(response);
        }
    }
    function passResponse(myResponse){
        for(var i = 0; i<myResponse.length; i++){
            getHierarchy('nh_level', myResponse[i][1][1]);
            // nh_name.push(myResponse[i][2][1]);
            // nh_id.push(myResponse[i][1][1]);
            // nh_level.push(myResponse[i][0][1]);
            // level0.name = nh_name;
            // level0.id = nh_id;
            // level0.level = nh_level;
        }
        console.dir(level0);
    }
}