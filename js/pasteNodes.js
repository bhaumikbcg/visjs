function pasteNodes(){//Use the temperory array which has all the copied nodes and put it in nodes object
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}