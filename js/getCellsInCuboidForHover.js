function getCellsInCuboidForHover(cuboidId, hoverData){
    var fullCuboidId = cuboidId, hoverMapData = new Map(), paragraph = '';
    cuboidId = cuboidId.match(/[0-9]/g).join('');
    console.dir(hoverData);
    for(var i = 0; i<hoverData.length; i++){
        if(hoverData[i][0] === Number(cuboidId)){
            for(var j = i+1; j<hoverData.length; j++){
                if(hoverData[j][1] === "cell" && !hoverMapData.has(hoverData[j][0])){
                    hoverMapData.set(hoverData[j][0], hoverData[j]);
                    var url = 'get?type=row&id='+ hoverData[j][0] +'&offset=10';
                    getData(url, function(response){createSentenceForCuboid(response, cuboidId, fullCuboidId);});
                }
                if(hoverData[j][1] === "nh" || hoverData[j][1] === "collab" || hoverData[j][1] === "wb" || hoverData[j][1] === "cuboid") break;
            }
            break;
        }
    }
    
    function createSentenceForCuboid(response, cuboidId, fullCuboidId){//from getNodeId.js
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
        paragraph = paragraph + sentence + '</br>';
        addSentence(paragraph, cuboidId, fullCuboidId);
    }
}