//First remove all selected elements from the nodesData and then push nodesData into temporary object and display them.
function cutNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();
    var nodeLength = nodes.length;
    selectedNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i] !== undefined && nodesData[i].id === element) delete nodesData[i];
        }
    });
    for(var j = 1; j<=nodeLength; j++){
        if(nodesData[j] !== undefined)
            tempArray.push(nodesData[j]);
    }
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options); 
}