function createEdgeData(duplicateData, edgeData){//from displayNodesForSearch.js
    var currentNh0 = null, currentNh1 = null, currentNh2 = null, currentNh3 = null, currentCollab = null, currentWb = null, currentCuboid = null, currentCell = null;
    for(var i = 0; i < duplicateData.length-1; i++){//duplicateData has a complete list of nodes with duplicate nodes.
        var individualEdgeData = {};
        if(duplicateData[i].level < duplicateData[i+1].level){
            setCurrent(duplicateData[i]);//keep an account of all the latest nhs, collabs, wbs, cuboids and cells
            individualEdgeData.from = duplicateData[i].id;
            individualEdgeData.to = duplicateData[i+1].id;
            if(edgeData.length > 0) containsObject(individualEdgeData, edgeData);
            else edgeData.push(individualEdgeData);//for 1st edge object directly push it
        }
        else if((duplicateData[i].level > duplicateData[i+1].level && duplicateData[i+1].id !== 0) || (duplicateData[i].level === duplicateData[i+1].level)){//if the current id is equal to or greater than the next id
            var previousConnection = getCurrent(duplicateData[i+1].level);//get previous connection of next object
            individualEdgeData.from = previousConnection;
            individualEdgeData.to = duplicateData[i+1].id;
            containsObject(individualEdgeData, edgeData);
        }
        else continue;
    }
    function setCurrent(currentObject){//set the latest objects for each group
        switch (currentObject.level) {
            case 0:
                currentNh0 = currentObject.id;
                break;
            case 1:
                currentNh1 = currentObject.id;
                break;
            case 2:
                currentNh2 = currentObject.id;
                break;
            case 3:
                currentNh3 = currentObject.id;
                break;
            case 4:
                currentCollab = currentObject.id;
                break;
            case 5:
                currentWb = currentObject.id;
                break;
            case 6:
                currentCuboid = currentObject.id;
                break;
            case 7:
                currentCell = currentObject.id;
                break;
        }
    }
    function getCurrent(level){//get the latest group object to which the current object should be connected
        switch (level){
            case 1:
                return currentNh0;
            case 2:
                return currentNh1;
            case 3:
                return currentNh2;
            case 4:
                if(currentNh3 !== null) return currentNh3;
                else if(currentNh2 !== null) return currentNh2;
                else if(currentNh1 !== null) return currentNh1;
                else return currentNh0;
            case 5:
                return currentCollab;
            case 6:
                return currentWb;
            case 7:
                return currentCuboid;
        }
    }
}