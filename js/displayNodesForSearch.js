function displayNodesForSearch(myResponse){//from buildArrayForNodes.js
    var data = myResponse[0], mapData = new Map(), duplicateData = [];
    console.dir(data);
    nodeData = [];
    edgeData = [];
    for(var i = 0; i < data.length; i++){
        var individualNodeObject = {};//create custom node object for each element of the array
        //individualNodeObject.id = data[i][0].toString() + data[i][1];//concat of id and group
        if(data[i][1] !== ''){
            individualNodeObject.id = data[i][0].toString() + data[i][2];
            individualNodeObject.rowid = data[i][1];
            individualNodeObject.group = data[i][2];
            individualNodeObject.label = data[i][3];
            individualNodeObject.level = data[i][4];
        }
        else{
            individualNodeObject.id = data[i][0].toString() + data[i][2];
            individualNodeObject.group = data[i][2];
            individualNodeObject.label = data[i][3];
            individualNodeObject.level = data[i][4];
        }
        var keyId = individualNodeObject.group + individualNodeObject.label;//this is the key for map.
        createMap(individualNodeObject, mapData, keyId, duplicateData);
    }
    createEdgeData(duplicateData, edgeData);
    createNodeData(mapData, nodeData);
    transferNodesOnScreen(nodeData, edgeData, data);
}

function transferNodesOnScreen(nodeData, edgeData, hoverData){//from displayNodesForSearch.js and displayNodes.js
    nodes = new vis.DataSet(nodeData);
    edges = new vis.DataSet(edgeData);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
    
    network.on("hoverNode", function(properties){
        getNodeId(nodes.get(properties.node).rowid, properties.node, hoverData);
    });
}