var nodesInCluster = [];
function removeCluster(){
    selectedNodes = network.getSelectedNodes();
    nodesInCluster = network.getNodesInCluster(selectedNodes[0]);
    nodesInCluster.forEach(element => {
        nodesData[element].cid = 0;
    });
    tempArray.pop();
    nodes = new vis.DataSet(tempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
}