function getHierarchyForUpload(wbNameData){// from goInWhiteboard.js
    var bcg;
    bcg = new XMLHttpRequest();
    bcg.open('GET', 'http://192.168.250.23:5000/collapse?collapse_type=wb&collapse_id=' + wbNameData.id, true);
    bcg.send();//send the whiteboard id where the cuboid is to be uploaded
    bcg.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(bcg.readyState == 4 && bcg.status == 200){
            response = JSON.parse(bcg.responseText);
            formString(response);
        }
    }
}