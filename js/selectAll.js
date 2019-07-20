function selectAll(){
    tempArray = [];
    nodeData.forEach(element => {tempArray.push(element.id);});
    network.selectNodes(tempArray);
}