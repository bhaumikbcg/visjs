function buildArrayForNodes(response, cell, bigArray){//from getAddress.js
    //depending on the checkbox values, build array for the hierarchies
    if(cell === 1){//this will only give values upto the cuboid
        response.forEach(element => {
            for(var i = 0; i < element.length; i++){
                var outerElement = element[i], smallArray = [];
                if(outerElement[0][0] === "nh_level") smallArray = [outerElement[1][1], '', 'nh', outerElement[2][1], outerElement[0][1]];
                else if(outerElement[0][0] === "collab_id") smallArray = [outerElement[0][1], '','collab', outerElement[1][1], 4];
                else if(outerElement[0][0] === "wb_id") smallArray = [outerElement[0][1], '', 'wb', outerElement[1][1], 5];
                else if(outerElement[0][0] === "table_id") smallArray = [outerElement[0][1], '',  'cuboid', outerElement[1][1], 6];
                else if(outerElement.length > 2) continue;
                else continue;
                bigArray.push(smallArray);
            }
        });     
    }
    if(cell === 0){//this will give values upto the cell
        console.dir(response);
        response[response.length-1][1].forEach(responseElement => {
            responseElement.forEach(outerElement => {
                outerElement.forEach(element => {
                    var smallArray = [];
                    if(element[0].includes("nh")){
                        var nhLevelArray = element[0].split("_");
                        var levelNumber = Number(nhLevelArray[nhLevelArray.length - 1]);
                        smallArray = [element[1], '', 'nh', element[2], levelNumber];
                        bigArray.push(smallArray);
                    }
                    else if(element[0] === "collab"){
                        smallArray = [element[1], '', 'collab', element[2], 4];
                        bigArray.push(smallArray);
                    } 
                    else if(element[0][0] === "wb"){
                        smallArray = [element[0][1], '', 'wb', element[0][2], 5];
                        bigArray.push(smallArray);
                        var lengthUnderWB = element.length, i = 1;
                        while(i < lengthUnderWB){
                            element[i].forEach(inWB => {
                                if(inWB[0] === "cuboid"){
                                    smallArray = [inWB[1], '', 'cuboid', inWB[2], 6];
                                    bigArray.push(smallArray);
                                } 
                                else{
                                    inWB.forEach(cuboidElement => {
                                        cuboidElement.forEach(element => {
                                            smallArray = [element[4], element[3], 'cell', element[5], 7];
                                            bigArray.push(smallArray);
                                        });
                                    });
                                }
                            });
                            i++;
                        }
                    }
                });
            });
        });
    }
    displayNodesForSearch([bigArray]);
}