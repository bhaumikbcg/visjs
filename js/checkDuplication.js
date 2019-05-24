function checkDuplication(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i){
    var flag = false;
    nodeData.forEach(element => {
        if(individualNodeObject.label === element.label){
            individualNodeObject.id = element.id;
            individualEdgeObject.from = data[i - 1][0];
            individualEdgeObject.to = element.id;
            edgeData.push(individualEdgeObject);
            flag = !flag;
        } 
    });
        if(!flag){
        nodeData.push(individualNodeObject);
        if(edgeData.length === 0){
            individualEdgeObject.from = data[i - 1][0];
            individualEdgeObject.to = data[i][0];
            edgeData.push(individualEdgeObject);
        }
        else{
            individualEdgeObject.from = edgeData[edgeData.length - 1].to;
            individualEdgeObject.to = data[i][0];
            edgeData.push(individualEdgeObject);
        }
    }
}