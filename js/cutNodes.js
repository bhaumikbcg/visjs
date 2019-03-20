function cutNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();
    var nodeLength = nodes.length;
    selectedNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i] !== undefined && nodesData[i].id === element)
                delete nodesData[i];
                //&& !tempArray.includes(nodesData[i])
                //tempArray.push(nodesData[i]);
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