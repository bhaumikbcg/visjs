var privateSpaceStorage;
function openPrivateSpace(a){
    var receivedName = a.innerHTML;
    privateSpaceStorage = JSON.parse(localStorage.getItem(receivedName));
    nodes = new vis.DataSet(privateSpaceStorage);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}