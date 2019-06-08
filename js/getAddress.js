function getAddress(){
    var bigArray = [], cell;
    var searchWord = $('.getAddress').val();
    if($('.getCell').prop("checked") === true) cell = 1;
    else cell = 0;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/searchUsingFilter?term=' + searchWord + '&flag=' + cell, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            buildArrayForNodes(response, cell, bigArray);
        }
    }
}