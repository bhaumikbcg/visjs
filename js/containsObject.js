function containsObject(individualEdgeObject, edgeData){// from createEdgeData.js
    var inside = false;
    for(var i = 0; i < edgeData.length; i++){
        if(individualEdgeObject.from === edgeData[i].from && individualEdgeObject.to === edgeData[i].to){//check if the edgeObject already exists in the edgeData array
            inside = true;
            break;
        }
    }
    if(!inside) edgeData.push(individualEdgeObject);//if not already inside, push it in edgeData object
}