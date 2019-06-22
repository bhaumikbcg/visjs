function createEdgeData(duplicateData, edgeData){
    for(var i = 0; i < duplicateData.length-1; i++){
        var individualEdgeData = {};
        if(duplicateData[i].level < duplicateData[i+1].level){
            individualEdgeData.from = duplicateData[i].id;
            individualEdgeData.to = duplicateData[i+1].id;
            if(edgeData.length > 0) containsObject(individualEdgeData, edgeData);
            else edgeData.push(individualEdgeData);
        }
        else continue;
    }
}