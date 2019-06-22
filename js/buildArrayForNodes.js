function buildArrayForNodes(response, cell, bigArray){
    console.dir(response);
    if(cell === 1){
        response.forEach(element => {
            for(var i = 2; i < element.length; i++){
                var outerElement = element[i];
                for(var j = 0; j < outerElement.length; j++){
                    var smallArray = [], innerElement = outerElement[j];
                    console.dir(innerElement);
                    if(innerElement[0][0] === "nh_level") smallArray = [innerElement[1][1], 'nh', innerElement[2][1], innerElement[0][1]];
                    else if(innerElement[0][0] === "collab_id") smallArray = [innerElement[0][1], 'collab', innerElement[1][1], 4];
                    else if(innerElement[0][0] === "wb_id") smallArray = [innerElement[0][1], 'wb', innerElement[1][1], 5];
                    else if(innerElement[0][0] === "table_id") smallArray = [innerElement[0][1], 'cuboid', innerElement[1][1], 6];
                    else if(innerElement.length > 2) continue;
                    else continue;
                    bigArray.push(smallArray);
                }
            }
        });     
    }
    if(cell === 0){
        response.forEach(responseElement => {
            responseElement[responseElement.length-1][1].forEach(outerElement => {
                outerElement.forEach(innerElement => {
                    innerElement.forEach(element => {
                        var smallArray = [];
                        if(element[0].includes("nh")){
                            var nhLevelArray = element[0].split("_");
                            var levelNumber = Number(nhLevelArray[nhLevelArray.length - 1]);
                            smallArray = [element[1], 'nh', element[2], levelNumber];
                        }
                        else if(element[0] === "collab") smallArray = [element[1], 'collab', element[2], 4];
                        else if(element[0][0] === "wb"){
                            smallArray = [element[0][1], 'wb', element[0][2], 5];
                            bigArray.push(smallArray);
                            var lengthUnderWB = element.length, i = 1;
                            while(i < lengthUnderWB){
                                element[i].forEach(inWB => {
                                    console.dir(inWB);
                                    if(inWB[0] === "cuboid") smallArray = [inWB[1], 'cuboid', inWB[2], 6];
                                    else if(inWB[0][0] === "cell") smallArray = [inWB[0][3], 'cell', inWB[0][5], 7];
                                    bigArray.push(smallArray);
                                });
                                i++;
                            }
                        }
                        bigArray.push(smallArray);
                    });
                });
            });
        });
    }
    console.dir(bigArray);
    displayNodesForSearch1([bigArray]);
}