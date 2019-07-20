var myOpentip = new Opentip($("#mynetwork"));
network.on("hoverNode", function(properties){getNodeId(properties);});
function getNodeId(properties){
    myOpentip.setContent(properties.node);
    myOpentip.show();
}
network.on("blurNode", function(){
    myOpentip.hide();
});
network.on("showPopup", function(params){
    console.dir(params);
});