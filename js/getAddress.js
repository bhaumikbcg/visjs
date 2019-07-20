function getAddress(){//from index.html
    var bigArray = [], cell, filter = '0';
    var searchWord = $('.getAddress').val();//collect the word/phrase that you type in the text box.
    if($('.getCell').prop("checked") === true) cell = 1;//collect the boolean value of the checkbox
    else cell = 0;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.250.23:5000/searchUsingFilter?term=' + searchWord + '&flag=' + cell + '&filters=' + filter, true);//send request to get data from the server
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);//record the response
            buildArrayForNodes(response, cell, bigArray);
        }
    }
}