function selectAll(){
    tempArray = [];
    nodeData.forEach(element => {tempArray.push(element.id);});
    network.selectNodes(tempArray);
}

function selectAllCells(){
    tempArray = [];
    nodeData.forEach(element => {
        if(element.group === "cell") tempArray.push(element.id);
    });
    network.selectNodes(tempArray);
}

function selectAllCuboids(){
    tempArray = [];
    nodeData.forEach(element => {
        if(element.group === "cuboid") tempArray.push(element.id);
    });
    network.selectNodes(tempArray);    
}

function selectAllWbs(){
    tempArray = [];
    nodeData.forEach(element => {
        if(element.group === "wb") tempArray.push(element.id);
    });
    network.selectNodes(tempArray);    
}

function selectAllCollabs(){
    tempArray = [];
    nodeData.forEach(element => {
        if(element.group === "collab") tempArray.push(element.id);
    });
    network.selectNodes(tempArray);    
}

function selectAllNhs(){
    tempArray = [];
    nodeData.forEach(element => {
        if(element.group === "nh") tempArray.push(element.id);
    });
    network.selectNodes(tempArray);    
}