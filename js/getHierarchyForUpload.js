function getHierarchyForUpload(wbID){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/collapse?collapse_type=wb&collapse_id=' + wbID, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            console.dir(response);
        }
    }
}