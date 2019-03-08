var nodes = new vis.DataSet([
    {id:1, group:'PT', label:'Washington'}, {id:2, group:'PT', label:'Oregon'}, {id:3, group:'PT', label:'California'}, {id:4, group:'MT', label:'Idaho'}, {id:5, group:'PT', label:'Nevada'}, {id:6, group:'MT', label:'Arizona'}, {id:7, group:'MT', label:'Montana'}, {id:8, group:'MT', label:'Wyoming'}, {id:9, group:'MT', label:'Utah'}, {id:10, group:'MT', label:'Colorado'}, {id:11, group:'MT', label:'New Mexico'}, {id:12, group:'CT', label:'North Dakota'},
    {id:13, group:'CT', label:'South Dakota'}, {id:14, group:'CT', label:'Nebraska'}, {id:15, group:'CT', label:'Kansas'}, {id:16, group:'CT', label:'Oklahoma'}, {id:17, group:'CT', label:'Texas'}, {id:18, group:'CT', label:'Minnesota'}, {id:19, group:'CT', label:'Iowa'}, {id:20, group:'CT', label:'Missouri'}, {id:21, group:'CT', label:'Arkansas'}, {id:22, group:'CT', label:'Louisiana'}, {id:23, group:'ET', label:'Michigan'}, {id:24, group:'CT', label:'Wisconsin'}, {id:25, group:'CT', label:'Illinois'}, {id:26, group:'ET', label:'Indiana'}, {id:27, group:'ET', label:'Ohio'}, {id:28, group:'ET', label:'Kuntucky'}, {id:29, group:'ET', label:'Tennessee'}, {id:30, group:'CT', label:'Mississippi'}, {id:31, group:'CT', label:'Alabama'}, {id:32, group:'ET', label:'Florida'}, {id:33, group:'ET', label:'Georgia'}, {id:34, group:'ET', label:'South Carolina'}, {id:35, group:'ET', label:'North Carolina'}, {id:36, group:'ET', label:'Virginia'}, {id:37, group:'ET', label:'West Virginia'}, {id:38, group:'ET', label:'Washington DC'}, {id:39, group:'ET', label:'Maryland'}, {id:40, group:'ET', label:'Delaware'}, {id:41, group:'ET', label:'New Jersey'}, {id:42, group:'ET', label:'Pennsylvania'}, {id:43, group:'ET', label:'New York'}, {id:44, group:'ET', label:'Connecticut'}, {id:45, group:'ET', label:'Rhode Island'}, {id:46, group:'ET', label:'Massachusetts'}, {id:47, group:'ET', label:'Vermont'}, {id:48, group:'ET', label:'New Hampshire'}, {id:49, group:'ET', label:'Maine'}, {id:50, group:'AT', label:'Alaska'}
    //, {id:51, group:'HT', label:'Hawaii'}
]);

var edges = new vis.DataSet([
    {from:1, to:2}, {from:1, to:4}, {from:1, to:50}, {from:2, to:3}, {from:2, to:4}, {from:2, to:5}, {from:3, to:6}, {from:3, to:5}, {from: 4, to:5}, {from:4, to:7}, {from:4, to:8}, {from:4, to:9}, {from:5, to:9}, {from:5, to:6}, {from:6, to:7}, {from:6, to:10}, {from:6, to:11}, {from:7, to:8}, {from:7, to:12}, {from:7, to:13}, {from:8, to:13}, {from:8, to:10}, {from:8, to:14}, {from:9, to:10}, {from:9, to:11}, {from:10, to:11}, {from:10, to:14}, {from:10, to:15}, {from:10, to:16}, {from:11, to:16}, {from: 11, to:17}, {from:12, to:13}, {from:12, to:18}, {from:13, to:18}, {from:13, to:14}, {from:13, to:19}, {from:14, to:19}, {from:14, to:15}, {from:14, to:20}, {from:15, to:16}, {from:15, to:20}, {from:16, to:17}, {from:16, to:20}, {from:16, to:21}, {from:17, to:21}, {from:17, to:22}, {from:18, to:19}, {from:18, to:24}, {from:19, to:20}, {from:19, to:24}, {from:19, to:25}, {from:20, to:21}, {from:20, to:25}, {from: 20, to:28}, {from:20, to:29}, {from:21, to:22}, {from:21, to:29}, {from:21, to:30}, {from:22, to:30}, {from:23, to:24}, {from:23, to:26}, {from:23, to:27}, {from:24, to:25}, {from:25, to:26}, {from:25, to:28}, {from:26, to:27}, {from:26, to:28}, {from:27, to:28}, {from:27, to:37}, {from:27, to:42}, {from:28, to:29}, {from:28, to:37}, {from:28, to:36}, {from:29, to:30}, {from:29, to:31}, {from:29, to:33}, {from:29, to:35}, {from:29, to:36}, {from:30, to:31}, {from:31, to:32}, {from:31, to:33}, {from:32, to:33}, {from:33, to:34}, {from:33, to:35}, {from:34, to:35}, {from:35, to:36}, {from:36, to:37}, {from:36, to:38}, {from:36, to:39}, {from:37, to:39}, {from:37, to:42}, {from:38, to:39}, {from:39, to:40}, {from:39, to:42}, {from:40, to:41}, {from:40, to:42}, {from:41, to:42}, {from:41, to:43}, {from:42, to:43}, {from:43, to:44}, {from:43, to:46}, {from:43, to:47}, {from:44, to:45}, {from:44, to:46}, {from:46, to:47}, {from:46, to:48}, {from:47, to:48}, {from:48, to:49}
]);

var container = document.getElementById('mynetwork');
var data = {nodes:nodes, edges: edges};
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
var options = {autoResize:true, height:'100%', width:'100%', locales:locales, clickToUse:true,        configure:{
        enabled: true,
        filter:'nodes, edges, selection',
        container: undefined,
        showButton:true
    },
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
        HT:{color:{background:'rgb(247, 205, 175)'}}
    },
    interaction:{
        dragNodes:true,
        dragView:true,
        hideEdgesOnDrag:true,
        hoverConnectedEdges:true,
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
            levelSeparation:150,
            nodeSpacing:100,
            treeSpacing:200,
            blockShifting:true,
            edgeMinimization:true,
            parentCentralization:true,
            direction:'LR',
            sortMethod:'directed'
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
                console.dir(selected);
            },
            label:function(selected){
                //console.dir(selected);
            }
        }
    }
};
var network = new vis.Network(container, data, options);
network.setOptions(options);