function getAddress(){
    var bigArray = [], cell;
    var searchWord = $('.getAddress').val();
    if($('.getCell').prop("checked") === true) cell = 1;
    else cell = 0;
    xhr = new XMLHttpRequest();
    console.dir('http://192.168.250.23:5000/search?term=' + searchWord + '&flag=' + cell);
    xhr.open('GET', 'http://192.168.250.23:5000/search?term=' + searchWord + '&flag=' + cell, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e){
        if(xhr.readyState == 4 && xhr.status == 200){
            response = JSON.parse(xhr.responseText);
            buildArrayForNodes(response, cell);
        }
    }
    function buildArrayForNodes(response, cell){
        if(cell === 1){
        for(var i = 0; i < response.length; i++){
            var outerElement = response[i];
            for(var j = 0; j < outerElement.length; j++){
                var smallArray = [], innerElement = outerElement[j];
                console.dir(innerElement);
                if(innerElement[0][0] === "nh_level") smallArray = [innerElement[1][1], 'AT', innerElement[2][1]];
                else if(innerElement[0][0] === "collab_id") smallArray = [innerElement[0][1], 'ET', innerElement[1][1]];
                else if(innerElement[0][0] === "wb_id") smallArray = [innerElement[0][1], 'PT', innerElement[1][1]];
                else if(innerElement[0][0] === "table_id") smallArray = [innerElement[0][1], 'MT', innerElement[1][1]];
                else if(innerElement[0].length > 2) continue;
                else continue;
                bigArray.push(smallArray);
            }
        }
    }
        if(cell === 0){
            response[response.length - 1][1].forEach(outerElement => {
                outerElement.forEach(innerElement => {
                    innerElement.forEach(element => {
                        var smallArray = [];
                        if(element[0].includes("nh")) smallArray = [element[1], 'AT', element[2]];
                        else if(element[0] === "collab") smallArray = [element[1], 'ET', element[2]];
                        else if(element[0][0] === "wb"){
                            smallArray = [element[0][1], 'PT', element[0][2]];
                            bigArray.push(smallArray);
                            var lengthUnderWB = element.length, i = 1;
                            while(i < lengthUnderWB){
                                element[i].forEach(inWB => {
                                    if(inWB[0] === "cuboid") smallArray = [inWB[1], 'MT', inWB[2]];
                                    else if(inWB[0] === "cell") smallArray = [inWB[3], 'CT', inWB[5]];
                                    bigArray.push(smallArray);
                                });
                                i++;
                            }
                        }
                        bigArray.push(smallArray);
                    });
                });
            });
        }
        displayNodes(['', '', '', '', '', '', '', bigArray]);
    }
}