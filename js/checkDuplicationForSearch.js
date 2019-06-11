function checkDuplicationForSearch(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i){
    var flag = false;
    for(var j = 0; j < nodeData.length; j++){
        if(individualNodeObject.label === nodeData[j].label && individualNodeObject.group === nodeData[j].group){
            individualNodeObject.id = nodeData[j].id;
            if(nodeData[nodeData.length - 1].level === nodeData[j].level - 1){
                individualEdgeObject.from = nodeData[nodeData.length - 1].id;
                individualEdgeObject.to = nodeData[j].id;
                containsObject1(individualEdgeObject, edgeData);
            }
            else{
                for(var k = nodeData.length - 1; k >= 0; k--){
                    if(k-1 >= 0 && (individualNodeObject.label === nodeData[k].label && individualNodeObject.group === nodeData[k].group) && (data[i - 1][2] === nodeData[k - 1].label && data[i - 1][1] === nodeData[k - 1].group)){
                        individualEdgeObject.from = nodeData[k - 1].id;
                        individualEdgeObject.to = nodeData[k].id;
                        containsObject1(individualEdgeObject, edgeData);
                        break;
                    }
                }
            }
            flag = !flag;
            break;
        }
    }
    if(!flag){
        nodeData.push(individualNodeObject);
        if(edgeData.length === 0){
            if(data[i - 1][3] < data[i][3]){
                individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                individualEdgeObject.to = data[i][0].toString() + data[i][1];
                edgeData.push(individualEdgeObject);
            }
        }
        else{
            for(var j = 0; j < nodeData.length; j++){
                if(nodeData[j].id === edgeData[edgeData.length - 1].to){
                    if(nodeData[j].level < data[i][3]){
                        individualEdgeObject.from = edgeData[edgeData.length - 1].to;
                        individualEdgeObject.to = data[i][0].toString() + data[i][1];
                        containsObject1(individualEdgeObject, edgeData);
                    }
                    else if(data[i-1][3] === data[i][3]-1){
                        individualEdgeObject.from = data[i-1][0].toString() + data[i-1][1];
                        individualEdgeObject.to = data[i][0].toString() + data[i][1];
                        containsObject1(individualEdgeObject, edgeData);
                    }
                    else if(nodeData[j].level === data[i][3]){
                        individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                        individualEdgeObject.to = data[i][0].toString() + data[i][1];
                        containsObject1(individualEdgeObject, edgeData);
                    }
                    else{
                        var newObject = false;
                        edgeData.forEach(element => {
                            if((element.from === nodeData[nodeData.length - 1].id || element.to === nodeData[nodeData.length - 1].id) || nodeData[nodeData.length-1].level !==0) newObject = false;
                            else newObject = true;
                        });
                        if(newObject){
                            if(data[i][3] < data[i + 1][3]){
                                individualEdgeObject.from = data[i][0].toString() + data[i][1];
                                individualEdgeObject.to = data[i+1][0].toString() + data[i+1][1];
                                containsObject1(individualEdgeObject, edgeData);
                            }
                        }
                    }
                break;
                }
            }
        }
    }
}