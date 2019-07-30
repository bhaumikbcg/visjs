function getNodeId(rowId, hoverData){//from displayNodesForSearch.js
    if(typeof(rowId) === "string" && rowId.includes("cuboid")) getCellsInCuboidForHover(rowId, hoverData);
    else if(rowId.length >1){
        var fullRowId = rowId;
        rowId = rowId.match(/[0-9]/g).join('');
        var url = 'get?type=row&id='+ rowId +'&offset=10';
        getData(url, function(response){createSentence(response, rowId, fullRowId);});
    }
    else{
        var url = 'get?type=row&id='+ rowId +'&offset=10';
        getData(url, function(response){createSentence(response, rowId, fullRowId);});
    }
}