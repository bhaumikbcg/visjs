function home(){
    nodes = new vis.DataSet(basicData);
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}