var clusterDataArray = [];
function createCluster(){
    selectedNodes = network.getSelectedNodes();
    nodeLength = nodeData.length;
    var ID = '';
    var clusterName = prompt("Group Name:");
    selectedNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element){
                clusterDataArray.push(nodeData[i]);
                ID += '0' + element;
                nodeData[i].cid = 1;
            }
        }
    });
    var cluster = {
        id:Number(ID),
        group:'Cluster',
        label:clusterName,
        groupOf:clusterDataArray
    }
    for(var j = 0; j < nodeData.length; j++){
        tempArray.push(nodeData[j]);
    }
    tempArray.push(cluster);
    nodes = new vis.DataSet(tempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
    network.clustering.cluster(options);
}