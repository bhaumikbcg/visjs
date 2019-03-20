var parentNodes = [];
var childNodes = [];
tempArray = [];
function getParentNodes(){
    selectedNodes = network.getSelectedNodes();
    var nodeIdString = selectedNodes[0].toString();
    parentNodes = network.getConnectedNodes(nodeIdString, 'from');
    parentNodes.push(selectedNodes[0]);
    var nodeLength = nodes.length;
    parentNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i].id === element)
                tempArray.push(nodesData[i]);
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
    var nodeLength = nodes.length;
    childNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i].id === element)
                tempArray.push(nodesData[i]);
        }
    });
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}