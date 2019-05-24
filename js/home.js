function home(){
    nodes = new vis.DataSet(basicData);//to show the states of the USA
    data = {nodes:nodes, edges:edges};
    network = new vis.Network(container, data, options);
}