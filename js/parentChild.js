var parentNodes = [], childNodes = [];
function getParentNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();//get selected nodes
    var nodeIdString = selectedNodes[0].toString();//convert nodeId to string
    parentNodes = network.getConnectedNodes(nodeIdString, 'from');//get nodes which are connected to the 'from' edges.
    parentNodes.push(selectedNodes[0]);
    parentNodes.forEach(element => {
        for(var i = 0; i < nodeData.length; i++){
            if(nodeData[i].id === element) tempArray.push(nodeData[i]);
        }
    });
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}

function getChildNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();
    var nodeIdString = selectedNodes[0].toString();
    childNodes = network.getConnectedNodes(nodeIdString, 'to');//get nodes connected to the 'to' edges
    childNodes.push(selectedNodes[0]);
    childNodes.forEach(element => {
        for(var i = 0; i < nodeData.length; i++){
            if(nodeData[i].id === element)
                tempArray.push(nodeData[i]);
        }
    });
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}