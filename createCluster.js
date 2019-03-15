var clusterDataArray = [];
function createCluster(){
    selectedNodes = network.getSelectedNodes();
    nodeLength = nodes.length;
    var ID = '';
    var clusterName = prompt("Group Name:");
    selectedNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i].id === element){
                clusterDataArray.push(nodesData[i]);
                ID += '0' + element;
                nodesData[i].cid = 1;
            }
        }
    });
    var cluster = {
        id:Number(ID),
        group:'Cluster',
        label:clusterName,
        groupOf:clusterDataArray
    }
    for(var j = 1; j<= nodes.length; j++){
        tempArray.push(nodesData[j]);
    }
    tempArray.push(cluster);
    nodes = new vis.DataSet(tempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
    network.clustering.cluster(options);
}