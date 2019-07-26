function createSentence(response, rowId){//from getNodeId.js
    var sentence = '';
    for(var i = 4; i<response.length; i++){
        sentence = sentence + ' ' + response[i][2][2][3];
    }
    addSentence(sentence, rowId);
}

function addSentence(sentence, rowId){
    nodeData.forEach(element => {
        if(element.id.includes(rowId)) {
            element.title = sentence;
            if(element.level !== undefined) nodes.update({id:rowId, title:sentence, level:element.level});
            else nodes.update({id:rowId, title:sentence});
        }
    });
}