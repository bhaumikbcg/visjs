function containsObject(obj, list){
    for(var i = 0; i < list.length; i++){
        if(obj.from === list[i].from && obj.to === list[i].to) return true;
    }
    return false;
}

function containsObject1(individualEdgeObject, edgeData){
    for(var i = 0; i < edgeData.length; i++){
        if(individualEdgeObject.from === edgeData[i].from && individualEdgeObject.to === edgeData[i].to) break;
    }
    edgeData.push(individualEdgeObject);
}