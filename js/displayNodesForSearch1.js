function displayNodesForSearch(myResponse){
    var data = myResponse[0];
    nodeData = [];
    edgeData = [];
    for(var i = 0; i < data.length; i++){
        var individualNodeObject = {};
        var individualEdgeObject = {};
        if(data[i][1] !== undefined){
            individualNodeObject.id = data[i][0].toString() + data[i][1];
            individualNodeObject.group = data[i][1];
        }
        individualNodeObject.label = data[i][2];
        if(data[i][3] !== undefined && data[i][3].toString().length === 1) individualNodeObject.level = data[i][3];
        if(nodeData.length > 0) checkDuplicationForSearch(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i);
        else nodeData.push(individualNodeObject);
    }
    console.dir(nodeData);
    console.dir(edgeData);
    transferNodesOnScreen(nodeData, edgeData);
}

function transferNodesOnScreen(nodeData, edgeData){
    nodes = new vis.DataSet(nodeData);
    edges = new vis.DataSet(edgeData);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}