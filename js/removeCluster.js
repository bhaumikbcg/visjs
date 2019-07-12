var nodesInCluster = [];
function removeCluster(){
    selectedNodes = network.getSelectedNodes();
    nodesInCluster = network.getNodesInCluster(selectedNodes[0]);//get list of all selected nodes in the cluster
    for(var i = 0; i<nodesInCluster.length; i++){
        for(var j= 0 ; j<nodeData.length; j++){
            if(nodesInCluster[i] === nodeData[j].id) nodeData[j].cid = 0;//if the node from  nodedata exists in the cluster, then reduce it's id_counder(cid) to 0
        }
    }
    // nodesInCluster.forEach(element => {
    //     nodeData[element].cid = 0;
    // });
    clusterTempArray.pop();//remove the last element which is the cluster object data created by us
    nodes = new vis.DataSet(clusterTempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
}