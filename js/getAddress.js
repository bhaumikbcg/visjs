function getAddress(){//from index.html
    var filterIds = JSON.parse(localStorage.getItem("filterIdArray")), filter = [];
    filterIds.forEach(element => {
        if($('#'+element).prop("checked") === true) filter.push(element);
    });
    var bigArray = [], cell, filters = filter.join(), filter_flag = '0', searchWord = $('.getAddress').val();//collect the word/phrase that you type in the text box.
    if($('.getCell').prop("checked") === true) cell = 0;//collect the boolean value of the checkbox
    else cell = 1;
    if($('#filter').prop("checked") === true) filter_flag = 1;//collect the boolean value of the checkbox
    else filter_flag = 0;
    var url = 'searchUsingFilter?term=' + searchWord + '&flag=' + cell + '&filters=' + filters + '&filter_flag=' + filter_flag;
    getData(url, function(response){buildArrayForNodes(response, cell, bigArray);});
}