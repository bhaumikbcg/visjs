var tempArray = [];
function copyNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();
    var nodeLength = nodeData.length;
    selectedNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element) tempArray.push(nodeData[i]);
        }
    });
}