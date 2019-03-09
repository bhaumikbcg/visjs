var clusterDataArray = [];
function createGroup(){
    selectedNodes = network.getSelectedNodes();
    var nodeLength = nodes.length;
    var clusterName = prompt("Group Name:");
    selectedNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i].id === element)
                clusterDataArray.push(nodesData[i]);
        }
    });
    var cluster = {
        name:clusterName,
        data:clusterDataArray
    }
    console.dir(cluster);
}