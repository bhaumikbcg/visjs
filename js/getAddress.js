function getAddress(){//from index.html
    var bigArray = [], cell, filter = '0', filter_flag = '0', searchWord = $('.getAddress').val();//collect the word/phrase that you type in the text box.
    if($('.getCell').prop("checked") === true) cell = 1;//collect the boolean value of the checkbox
    else cell = 0;
    var url = 'searchUsingFilter?term=' + searchWord + '&flag=' + cell + '&filters=' + filter + '&filter_flag=' + filter_flag;
    getData(url, function(response){buildArrayForNodes(response, cell, bigArray);});
}