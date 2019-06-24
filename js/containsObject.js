function containsObject(individualEdgeObject, edgeData){
    var inside = false;
    for(var i = 0; i < edgeData.length; i++){
        if(individualEdgeObject.from === edgeData[i].from && individualEdgeObject.to === edgeData[i].to){
            inside = true;
            break;
        }
    }
    if(!inside) edgeData.push(individualEdgeObject);
}