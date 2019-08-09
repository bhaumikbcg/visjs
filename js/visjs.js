//Here we are basically setting options for the network and the whole screen.
var container = document.getElementById('mynetwork'); //the element in which network will be shown.
var data = {nodes:nodes, edges: edges};//node and edge objects are stored in data object.
var locales = {
    en: {
      edit: 'Edit',
      del: 'Delete selected',
      back: 'Back',
      addNode: 'Add Node',
      addEdge: 'Add Edge',
      editNode: 'Edit Node',
      editEdge: 'Edit Edge',
      addDescription: 'Click in an empty space to place a new node.',
      edgeDescription: 'Click on a node and drag the edge to another node to connect them.',
      editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
      createEdgeError: 'Cannot link edges to a cluster.',
      deleteClusterError: 'Clusters cannot be deleted.',
      editClusterError: 'Clusters cannot be edited.'
    }
}
var options = {autoResize:false, height:'100%', width:'100%', locales:locales, clickToUse:true,        configure:{
        enabled: false,
        filter:'nodes, edges, selection',
        container: undefined,
        showButton:true
    },
    clusterNodeProperties:{allowSingleNodeCluster:true},
    joinCondition:nodeOptions => nodeOptions.cid === 1,
    edges:{
        chosen:{
            edge:function(color, selected){
                color.color = 'rgb(255,0,0)';
                //console.dir(selected);
            }
        },
        //physics: true
    },
    groups:{
        useDefaultGroups: true,
        PT:{color:{background:'rgb(252, 181, 185)'}},
        MT:{color:{background:'rgb(247, 244, 175)'}},
        CT:{color:{background:'rgb(232, 175, 247)'}},
        ET:{color:{background:'rgb(175, 247, 179)'}},
        HT:{color:{background:'rgb(247, 205, 175)'}},
        collab:{color:{background:'rgb(175, 247, 179)'}},
        wb:{color:{background:'rgb(252, 181, 185)'}},
        cuboid:{color:{background:'rgb(247, 244, 175)'}},
        cell:{color:{background:'rgb(232, 175, 247)'}}
    },
    interaction:{
        dragNodes:true,
        dragView:true,
        hideEdgesOnDrag:true,
        hoverConnectedEdges:true,
        hover:true,
        keyboard:{
            enabled:true,
            speed:{x:10, y:10, zoom:0.02},
            bindToWindow:true
        },
        multiselect:true,
        navigationButtons:true,
        selectable:true,
        selectConnectedEdges:true,
        zoomView:true
    },
    layout:{
        improvedLayout:true,
        hierarchical:{
            enabled:true,
            levelSeparation:200,
            nodeSpacing:100,
            treeSpacing:150,
            blockShifting:true,
            edgeMinimization:true,
            parentCentralization:true,
            direction:'LR',
            sortMethod:'directed'
        }
    },
    physics:{
        enabled:true,
        barnesHut:{
            centralGravity: 0.0,
            springLength: 100,
            springConstant: 0.01,
            nodeDistance: 120,
            damping: 0.09,
            avoidOverlap:0
        },
        solver:'barnesHut',
        stabilization: {
            enabled: true,
            iterations: 1000,
            updateInterval: 100,
            onlyDynamicEdges: false,
            fit: true
          }
    },
    manipulation:{
        enabled:true,
        initiallyActive:true,
        addNode: function(nodeData, callback){
            nodeData.label = 'London';
            callback(nodeData);
        },
        addEdge:function(edgeData, callback){
            if(edgeData.from === edgeData.to){
                var r = confirm("Do you want to connect the Node to itself?");
                if(r) callback(edgeData);
            }
            else callback(edgeData);
        },
        editNode:function(nodeData, callback){
            var label = prompt("Name of the node?");
            nodeData.label = label;
            var group = prompt("Group of the node? Options are PT/MT/CT/ET/AT/HT")
            nodeData.group = group;
            callback(nodeData);
        },
        editEdge:true,
        deleteNode:true,
        deleteEdge:true
    },
    nodes:{
        chosen:{
            node:(color, selected)=>{
                color.color = 'rgb(209,209,209)';
            },
            label:function(selected){
                //selected gives object to change attributes of the label like color etc. It does not give the label itself.
            },
            //image:url('C:\Users\Bhaumik\OneDrive - Boardwalktech, Inc\visjs\images\img.jpg')
        },
        //physics:true,
    }
};
var network = new vis.Network(container, data, options);//network object is created.
network.setOptions(options);//options are set for the network created above.