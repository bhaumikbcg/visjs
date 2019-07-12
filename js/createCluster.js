var clusterDataArray = [], clusterTempArray = [];
function createCluster(){
    clusterTempArray = [];
    selectedNodes = network.getSelectedNodes();//get all selected nodes
    nodeLength = nodeData.length;
    var ID = '';
    var clusterName = prompt("Group Name:");//give a name for cluster
    selectedNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element){
                clusterDataArray.push(nodeData[i]);//add selected nodes to a different array
                ID += '0' + element;//add 0 as deliminator
                nodeData[i].cid = 1;
            }
        }
    });
    var cluster = {//create a custom cluster object to store information for all nodes in the cluster. This object is only stored for now and not used anywhere. 
        id:Number(ID),
        group:'Cluster',
        label:clusterName,
        level:0000,
        groupOf:clusterDataArray
    }
    for(var j = 0; j < nodeData.length; j++){
        clusterTempArray.push(nodeData[j]);//add all nodes to tempArray
    }
    clusterTempArray.push(cluster);//add the cluster created above to tempArray, in addition to all nodes already present
    nodes = new vis.DataSet(clusterTempArray);
    data = {nodes: nodes, edges: edges};
    network = new vis.Network(container, data, options);
    network.clustering.cluster(options);//this is the cluster created by visjs
}