function getNodeId(rowId, cellid, hoverData){//from displayNodesForSearch.js
    if(typeof(cellid) === "string" && cellid.includes("cuboid")) getCellsInCuboidForHover(cellid, hoverData);
    else if(typeof(rowId) === "number"){
        //rowId = rowId.match(/[0-9]/g).join('');
        var url = 'get?type=row&id='+ rowId +'&offset=10';
        getData(url, function(response){createSentence(response, rowId, cellid);});
    }
    else{
        if(typeof(cellid) === "number"){
            var url = 'get?type=row&id='+ cellid +'&offset=10';
            getData(url, function(response){createSentence(response, rowId, cellid);});
        }
    }
}