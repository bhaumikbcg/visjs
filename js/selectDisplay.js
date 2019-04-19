function selectDisplay(myResponse){
    if(myResponse[1] !== undefined && myResponse[1][0][0] === "collab_id") displayCollaboration(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "wb_id") displayWhiteboard(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0][0][0] === "cuboid_id") displayCuboid(myResponse);
    else if(myResponse[0] !== undefined && myResponse[0] === "cuboid" && myResponse[1][2][1] === "Document") displayNodes(myResponse);
    else displayNeighbourhood(myResponse);
}