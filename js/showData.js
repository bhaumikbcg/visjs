//Select a cuboid from the network and display it's contents. Collect it's group and id and pass it to getHierarchy function.
network.on("doubleClick", function(properties){console.dir(properties.nodes)});
function showData(){
    selectedNodes = network.getSelectedNodes();
    var hierarchyDetails = selectedNodes[0].match(/[a-zA-Z]+|[0-9]+/g);
    getHierarchy(hierarchyDetails[1], Number(hierarchyDetails[0]));
}