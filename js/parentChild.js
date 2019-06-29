var parentNodes = [], childNodes = [];
tempArray = [];
function getParentNodes(){
    selectedNodes = network.getSelectedNodes();//get selected nodes
    var nodeIdString = selectedNodes[0].toString();//convert nodeId to string
    parentNodes = network.getConnectedNodes(nodeIdString, 'from');
    parentNodes.push(selectedNodes[0]);
    var nodeLength = nodeData.length;
    parentNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element)
                tempArray.push(nodeData[i]);
        }
    });
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}

function getChildNodes(){
    selectedNodes = network.getSelectedNodes();
    var nodeIdString = selectedNodes[0].toString();
    childNodes = network.getConnectedNodes(nodeIdString, 'to');
    childNodes.push(selectedNodes[0]);
    var nodeLength = nodeData.length;
    childNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element)
                tempArray.push(nodeData[i]);
        }
    });
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}