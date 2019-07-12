function createNodeData(mapData, nodeData){//from displayNodesForSearch.js
    for(var value of mapData.values()){//put all mapData values inside nodeData array
        nodeData.push(value);
    }
}