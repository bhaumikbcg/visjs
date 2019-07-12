function createMap(individualNodeObject, mapData, keyId, duplicateData){//from displayNodesForSearch.js
    if(!mapData.has(keyId)){//if the key is not present in map
        mapData.set(keyId, individualNodeObject);//insert this data in map
        duplicateData.push(individualNodeObject);//insert this data in an array of duplicate data
    }
    else{//if it exists in map, then make the current object = the object that exists in map
        var currentNodeObject = mapData.get(keyId);
        individualNodeObject.id = currentNodeObject.id;//replace the id with the currentNode id which is actually the id of the object already present in map
        duplicateData.push(individualNodeObject);
    }
}