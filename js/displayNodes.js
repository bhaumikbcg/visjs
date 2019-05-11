function displayNodes(myResponse){
    var data = myResponse[7];
    console.dir(data);
    var nodeData = [];
    var edgeData = [];
    for(var i = 0; i < data.length; i++){
        var individualNodeObject = {};
        var individualEdgeObject = {};
        if(data[i][0] === 1000 || data[i][0] === 1006) continue;//do something about this
        individualNodeObject.id = data[i][0];
        if(data[i][1] !== undefined) individualNodeObject.group = data[i][1];
        individualNodeObject.label = data[i][2];
        if(nodeData.length > 0) checkDuplication(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i);
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