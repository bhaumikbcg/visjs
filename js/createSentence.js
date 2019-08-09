function createSentence(response, rowId, cellid){//from getNodeId.js
    var sentence = '';
    for(var i = 4; i<response.length; i++){
        if(response[i][2].length === 1) sentence = sentence + ' ' + response[i][2][0][3];
        else if(response[i][2][0][2] !== "Group Id"){
            for(var j = 0; j<response[i][2].length; j++){
                sentence = sentence + '</br>' + response[i][2][j][2] + ': ' + response[i][2][j][3]; 
            }
        }
        else sentence = sentence + ' ' + response[i][2][2][3];
    }
    addSentence(sentence, rowId, cellid);
}

function addSentence(sentence, rowId, cellid){
    var myId;
    console.dir(nodeData);
    for(var i = 0; i<nodeData.length; i++){
        if(nodeData[i].rowid || typeof(nodeData[i].id === "number")){
            if(typeof(nodeData[i].rowid) === "number") myId = nodeData[i].rowid.toString();
            else myId = nodeData[i].id.toString();
            if(myId.includes(rowId) || myId.includes(cellid)) {
                if(nodeData[i].level !== undefined) nodes.update({id:cellid, title:sentence, level:nodeData[i].level});
                else nodes.update({id:cellid, title:sentence});
                break;
            }
        }
    }
}