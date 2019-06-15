function showData(){
    selectedNodes = network.getSelectedNodes();
    var hierarchyDetails = selectedNodes[0].match(/[a-zA-Z]+|[0-9]+/g);
    getHierarchy(hierarchyDetails[1], Number(hierarchyDetails[0]));
}