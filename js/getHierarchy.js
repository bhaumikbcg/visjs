var response;
var xhr;
var neighbourhoodName = "root";
var neighbourhoodId = -1;
var nhName;
var nhNameData = {};
nhNameData.id = -10;
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


function passResponse(myResponse){
    for(var i = 0; i<myResponse.length; i++){
        if(myResponse[i][2][1] === "ROOT" || nhNameData.id === myResponse[i][1][1]) continue;
        var myObject = {};
        nhName = myResponse[i][2][1];
        myObject.name = nhName;
        myObject.id = myResponse[i][1][1];
        myObject.level = myResponse[i][0][1];
        myObject.count = -1;
        localStorage.setItem(nhName, JSON.stringify(myObject));
        if(myResponse[i][0][1] === 0)
            $('#hierarchy').append('<li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myResponse[i][2][1] +'" aria-expanded="false" aria-controls="collapseExample" onclick="goInHierarchy(this)">'+myResponse[i][2][1]+'</button></li><div class="collpase" id="' + myResponse[i][2][1] +'"></div>');
        else
            $('#' + nhNameData.name).append('<ul><li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#' + myResponse[i][2][1] +'" aria-expanded="false" aria-controls="collapseExample" onclick="goInHierarchy(this)">'+myResponse[i][2][1]+'</button></li><div class="collpase" id="' + myResponse[i][2][1] +'"></div></ul>');
    }
}