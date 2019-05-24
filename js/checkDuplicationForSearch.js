function checkDuplicationForSearch(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i){
    var flag = false;
    for(var j = 0; j < nodeData.length; j++){
        if(individualNodeObject.label === nodeData[j].label && individualNodeObject.group === nodeData[j].group){
            individualNodeObject.id = nodeData[j].id;
            if(nodeData[nodeData.length - 1].level !== undefined && nodeData[j].level !== undefined){
                if(nodeData[nodeData.length - 1].level < nodeData[j].level && nodeData[j].level - nodeData[nodeData.length - 1].level === 1){
                    individualEdgeObject.from = nodeData[nodeData.length - 1].id;
                    individualEdgeObject.to = nodeData[j].id;
                    var inside = containsObject(individualEdgeObject, edgeData);
                    if(!inside) edgeData.push(individualEdgeObject);
                }
                else{
                    for(var k = nodeData.length - 1; k >= 0; k--){
                        if(k-1 >= 0 && (individualNodeObject.label === nodeData[k].label && individualNodeObject.group === nodeData[k].group) && (data[i - 1][2] === nodeData[k - 1].label && data[i - 1][1] === nodeData[k - 1].group)){
                            individualEdgeObject.from = nodeData[k - 1].id;
                            individualEdgeObject.to = nodeData[k].id;
                            var inside = containsObject(individualEdgeObject, edgeData);
                            if(!inside) edgeData.push(individualEdgeObject);
                            break;
                        }
                    }
                }
            }
            else{
                individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                individualEdgeObject.to = nodeData[j].id;
                edgeData.push(individualEdgeObject);
            }
            flag = !flag;
            break;
        }
    }
    if(!flag){
        nodeData.push(individualNodeObject);
        if(edgeData.length === 0){
            if(data[i - 1][3] !== undefined && data[i][3] !== undefined){
                if(data[i - 1][3] < data[i][3]){
                    individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                    individualEdgeObject.to = data[i][0].toString() + data[i][1];
                    edgeData.push(individualEdgeObject);
                }
            }
            else{
                individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                individualEdgeObject.to = data[i][0].toString() + data[i][1];
                edgeData.push(individualEdgeObject);
            }
        }
        else{
            for(var j = 0; j < nodeData.length; j++){
                if(nodeData[j].id === edgeData[edgeData.length - 1].to){
                    if(nodeData[j].level !== undefined && data[i][3] !== undefined){
                        if(nodeData[j].level < data[i][3]){
                            individualEdgeObject.from = edgeData[edgeData.length - 1].to;
                            individualEdgeObject.to = data[i][0].toString() + data[i][1];
                            edgeData.push(individualEdgeObject);
                        }
                        //|| nodeData[j].level > data[i][3]
                        else if(nodeData[j].level === data[i][3]){
                            individualEdgeObject.from = data[i - 1][0].toString() + data[i - 1][1];
                            individualEdgeObject.to = data[i][0].toString() + data[i][1];
                            edgeData.push(individualEdgeObject);
                        }
                        else{
                            var newObject = false;
                            edgeData.forEach(element => {
                                if(element.from === nodeData[nodeData.length - 1].id || element.to === nodeData[nodeData.length - 1].id) newObject = false;
                                else newObject = true;
                            });
                            if(newObject){
                                if(data[i][3] !== undefined && data[i + 1][3] !== undefined){
                                    if(data[i][3] < data[i + 1][3]){
                                        individualEdgeObject.from = data[i][0].toString() + data[i][1];
                                        individualEdgeObject.to = data[i + 1][0].toString() + data[i + 1][1];
                                        edgeData.push(individualEdgeObject);
                                    }
                                }
                            }
                        }
                    }
                    else{
                        individualEdgeObject.from = edgeData[edgeData.length - 1].to;
                        individualEdgeObject.to = data[i][0].toString() + data[i][1];
                        edgeData.push(individualEdgeObject);
                    }
                    break;
                }
            }
            // individualEdgeObject.from = edgeData[edgeData.length - 1].to;
            // individualEdgeObject.to = data[i][0].toString() + data[i][1];
            // edgeData.push(individualEdgeObject);
        }
    }
}