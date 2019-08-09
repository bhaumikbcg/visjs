function getCellsInCuboidForHover(cuboidId, hoverData){//from getNodeId.js
    var fullCuboidId = cuboidId, hoverMapData = new Map();
    //paragraph = '';
    cuboidId = cuboidId.match(/[0-9]/g).join('');
    for(var i = 0; i<hoverData.length; i++){
        if(hoverData[i][0] === Number(cuboidId)){
            for(var j = i+1; j<hoverData.length; j++){
                if(hoverData[j][2] === "cell" && !hoverMapData.has(hoverData[j][0])){
                    hoverMapData.set(hoverData[j][0], hoverData[j]);
                    console.dir(hoverMapData);
                    var url = 'get?type=row&id='+ hoverData[j][1] +'&offset=10';
                    
                        xhr = new XMLHttpRequest();
                        xhr.open('GET', 'http://192.168.250.23:5000/' + url, false);//send request to get data from the server
                        xhr.send();
                        response = JSON.parse(xhr.responseText);
                        createSentenceForCuboid(response, cuboidId, fullCuboidId);
                    
                    //getData(url, function(response){createSentenceForCuboid(response, cuboidId, fullCuboidId);});
                }
                if(hoverData[j][2] === "nh" || hoverData[j][2] === "collab" || hoverData[j][2] === "wb" || hoverData[j][2] === "cuboid") break;
            }
            break;
        }
    }
    
    function createSentenceForCuboid(response, cuboidId, fullCuboidId){//from getNodeId.js
        var sentence = '', paragraph='';
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
        paragraph = paragraph + sentence + '</br>';
        for(var i = 0; i<nodeData.length; i++){
            if(fullCuboidId === nodeData[i].id) nodes.update({id:fullCuboidId, title:paragraph, level:nodeData[i].level});
        }
    }
}