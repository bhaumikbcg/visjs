var nodesInCluster = [];
function removeCluster(){
    selectedNodes = network.getSelectedNodes();
    nodesInCluster = network.getNodesInCluster(selectedNodes[0]);
    for(var i = 0; i<nodesInCluster.length; i++){
        for(var j= 0 ; j<nodeData.length; j++){
            if(nodesInCluster[i] === nodeData[j].id) nodeData[j].cid = 0;
        }
    }
    // nodesInCluster.forEach(element => {
    //     nodeData[element].cid = 0;
    // });
    tempArray.pop();
    nodes = new vis.DataSet(tempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
}