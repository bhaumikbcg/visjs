function displayNodes(myResponse){
    var data = myResponse[7];
    var nodeData = [];
    var edgeData = [];
    for(var i = 0; i < data.length; i++){
        var individualNodeObject = {};
        var individualEdgeObject = {};
        individualNodeObject.id = data[i][0];
        individualNodeObject.label = data[i][2];
        nodeData.push(individualNodeObject);
        if(data[i+1] !== undefined){
            individualEdgeObject.from = data[i][0];
            individualEdgeObject.to = data[i+1][0];
            edgeData.push(individualEdgeObject);
        }
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