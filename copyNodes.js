var tempArray = [];
var nodesData = nodes._data;
function copyNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();
    var nodeLength = nodes.length;
    selectedNodes.forEach(element => {
        for(var i = 1; i<=nodeLength; i++){
            if(nodesData[i].id === element)
                tempArray.push(nodesData[i]);
        }
    });
}