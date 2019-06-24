function displayNodesForSearch(myResponse){
    var data = myResponse[0], mapData = new Map(), duplicateData = [];
    nodeData = [];
    edgeData = [];
    for(var i = 0; i < data.length; i++){
        var individualNodeObject = {};
        individualNodeObject.id = data[i][0].toString() + data[i][1];
        individualNodeObject.group = data[i][1];
        individualNodeObject.label = data[i][2];
        individualNodeObject.level = data[i][3];
        var keyId = individualNodeObject.group + individualNodeObject.label;
        createMap(individualNodeObject, mapData, keyId, duplicateData);
    }
    createEdgeData(duplicateData, edgeData);
    createNodeData(mapData, nodeData);
    transferNodesOnScreen(nodeData, edgeData);
}

function transferNodesOnScreen(nodeData, edgeData){
    nodes = new vis.DataSet(nodeData);
    edges = new vis.DataSet(edgeData);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}