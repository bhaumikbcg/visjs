function getFilterCuboids(response){//from getHierarchy.js
    var count = Number($('#dropdownMenu7')[0].getAttribute("count"));
    count += 1;
    var stringCount = count.toString();
    $('#dropdownMenu7')[0].setAttribute("count", stringCount);
    if(count === 0){
        var filterIdArray = [];
        for(var i = 0; i<response.length; i++){
            var myFilterCuboid = {};
            myFilterCuboid.name = response[i][1][1];
            myFilterCuboid.id = response[i][0][1];
            filterIdArray.push(myFilterCuboid.id);
            localStorage.setItem(myFilterCuboid.id, JSON.stringify(myFilterCuboid));
            $('#filterList').append('<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="' + myFilterCuboid.id + '"><label class="form-check-label" for="' + myFilterCuboid.id + '">' + myFilterCuboid.name + '</label></div>');
        }
        localStorage.setItem("filterIdArray", JSON.stringify(filterIdArray));
    }
}