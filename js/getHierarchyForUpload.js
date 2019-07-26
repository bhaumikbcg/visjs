function getHierarchyForUpload(wbNameData){// from goInWhiteboard.js
    var url = 'collapse?collapse_type=wb&collapse_id=' + wbNameData.id;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/' + url, false);//send request to get data from the server
    xhr.send();
    response = JSON.parse(xhr.responseText);
    formString(response);
}