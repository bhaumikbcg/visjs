var selectedNodes;
function select(){
    // console.dir(network.getSelection());
    // console.dir(network.getSelectedNodes());
    // console.dir(network.getConnectedNodes("3"));
    network.clustering.cluster(options);
    clusterData();
}
function clusterData(){
    selectedNodes = network.getSelectedNodes();
    console.dir(selectedNodes);
}