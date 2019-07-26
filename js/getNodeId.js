function getNodeId(rowId){//from displayNodesForSearch.js
    if(rowId.length > 1){rowId = rowId.match(/[0-9]/g).join('');}
    var url = 'get?type=row&id='+ rowId +'&offset=10'
    getData(url, function(response){createSentence(response, rowId);});
}