function createMap(individualNodeObject, mapData, keyId, duplicateData){
    if(!mapData.has(keyId)){
        mapData.set(keyId, individualNodeObject);
        duplicateData.push(individualNodeObject);
    }
    else{
        var currentNodeObject = mapData.get(keyId);
        individualNodeObject.id = currentNodeObject.id;
        duplicateData.push(individualNodeObject);
    }
}