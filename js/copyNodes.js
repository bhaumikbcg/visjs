var tempArray = [];//copy all selected nodes and push them in a temperory array.
function copyNodes(){
    tempArray = [];
    selectedNodes = network.getSelectedNodes();//get list of all selected nodes
    var nodeLength = nodeData.length;
    selectedNodes.forEach(element => {
        for(var i = 0; i < nodeLength; i++){
            if(nodeData[i].id === element) tempArray.push(nodeData[i]);
        }
    });
}