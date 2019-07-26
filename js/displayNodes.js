function displayNodes(myResponse){//from selectDisplay.js
    var data = myResponse[7];//contains the complete list of nodes for a particular cuboid
    nodeData = [];//these 2 arrays will eventually contain all the node and edge objects to be displayed
    edgeData = [];
    for(var i = 0; i < data.length; i++){//loop through all nodes
        var individualNodeObject = {}, individualEdgeObject = {};//create individual objects to hold current nodes and edges on temporary basis
        individualNodeObject.id = data[i][0];//fill up all the attributes
        if(data[i][1] !== undefined) individualNodeObject.group = data[i][1];
        individualNodeObject.label = data[i][2];
        if(nodeData.length > 0) checkDuplication(data, nodeData, edgeData, individualNodeObject, individualEdgeObject, i);//if nodeData is not completely empty, check for duplication
        else nodeData.push(individualNodeObject);
    }
    console.dir(nodeData);
    console.dir(edgeData);
    transferNodesOnScreen(nodeData, edgeData);
}