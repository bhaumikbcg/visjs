function pasteNodes(){
    nodes = new vis.DataSet(tempArray);
    data = {nodes:nodes, edges:edges}
    network = new vis.Network(container, data, options);
}