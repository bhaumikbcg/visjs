function createSentence(response, rowId, fullRowId){//from getNodeId.js
    var sentence = '';
    console.dir(response);
    for(var i = 4; i<response.length; i++){
        if(response[i][2].length === 1) sentence = sentence + ' ' + response[i][2][0][3];
        else if(response[i][2][0][2] !== "Group Id"){
            for(var j = 0; j<response[i][2].length; j++){
                sentence = sentence + '</br>' + response[i][2][j][2] + ': ' + response[i][2][j][3]; 
            }
        }
        else sentence = sentence + ' ' + response[i][2][2][3];
    }
    addSentence(sentence, rowId, fullRowId);
}

function addSentence(sentence, rowId, fullRowId){
    var myId;
    for(var i = 0; i<nodeData.length; i++){
        if(typeof nodeData[i].id === "number") myId = nodeData[i].id.toString();
        else myId = nodeData[i].id;
        if(myId.includes(rowId)) {
            if(nodeData[i].level !== undefined) nodes.update({id:fullRowId, title:sentence, level:nodeData[i].level});
            else nodes.update({id:rowId, title:sentence});
            // network.body.emitter.emit('_dataChanged');
            // network.redraw();
            break;
        }
    }
}