function checkDuplication(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i){//from displayNodes.js
    var flag = false;
    nodeData.forEach(element => {//cross check each new incoming element with the one already present in the nodelist
        if(individualNodeObject.label === element.label){
            individualNodeObject.id = element.id;
            individualEdgeObject.from = data[i - 1][0];
            individualEdgeObject.to = element.id;
            edgeData.push(individualEdgeObject);
            flag = !flag;
        } 
    });
        if(!flag){//if not present in the nodeData list, then push the new element into it
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