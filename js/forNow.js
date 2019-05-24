function displayNodes(myResponse){
    var data = myResponse[7];
    nodeData = [];
    edgeData = [];
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


function checkDuplication(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i){
    var flag = false;
    nodeData.forEach(element => {
        if(individualNodeObject.label === element.label && individualNodeObject.group === element.group){
            individualNodeObject.id = element.id;
            individualEdgeObject.from = data[i - 1][0];
            individualEdgeObject.to = element.id;
            edgeData.push(individualEdgeObject);
            flag = !flag;
        }
    });
    if(!flag){
        nodeData.push(individualNodeObject);
        if(edgeData.length === 0){
            individualEdgeObject.from = data[i - 1][0];
            individualEdgeObject.to = data[i][0];
            edgeData.push(individualEdgeObject);
        }
        else{
            individualEdgeObject.from = edgeData[edgeData.length - 1].to;
            individualEdgeObject.to = data[i][0];
            edgeData.push(individualEdgeObject);
        }
    }
}