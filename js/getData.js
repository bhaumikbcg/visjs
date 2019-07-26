function getData(url, callback){
    xhr = new XMLHttpRequest();
    console.dir('http://192.168.250.23:5000/' + url);
    xhr.open('GET', 'http://192.168.250.23:5000/' + url, true);//send request to get data from the server
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200) {
            response = JSON.parse(xhr.responseText);
            callback(response);
        }
    }
}