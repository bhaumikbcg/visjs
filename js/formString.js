var main_array = [];
function formString(wbNameData){
    var nh0 = [[],[],[]], nh1 = [[],[],[]], nh2 = [[],[],[]], nh3 = [[],[],[]], collab = [[],[]], wb = [[],[]], count = 0;
    main_array = [];
    getHierarchyForUpload(wbNameData.id);
    if(wbNameData !== null) wb = [["wb_id", wbNameData.id], ["wb_name", wbNameData.name]];
    if(collabNameData !== null) collab = [["collab_id", collabNameData.id], ["collab_name", collabNameData.name]];
    if(nhNameData !== null){
        if(nhNameData.level === 0){
            nh0 = [["nh_level", 0], ["nh_id", nhNameData.id], ["nh_name", nhNameData.name]];
            if(nhNameData.level === 1){
                nh1 = [["nh_level", 1], ["nh_id", nhNameData.id], ["nh_name", nhNameData.name]];
                count += 1;
                if(nhNameData.level === 2){
                    nh2 = [["nh_level", 2], ["nh_id", nhNameData.id], ["nh_name", nhNameData.name]];
                    count += 1;
                    if(nhNameData.level === 3) {
                        nh3 = [["nh_level", 3], ["nh_id", nhNameData.id], ["nh_name", nhNameData.name]];
                        count += 1;
                    }
                }
            }
        }  
    }
    if(count === 3) main_array = [nh0, nh1, nh2, nh3, collab, wb];
    else if(count === 2) main_array = [nh0, nh1, nh2, collab, wb];
    else if(count === 1) main_array = [nh0, nh1, collab, wb];
    else main_array = [nh0, collab, wb];
    console.log(main_array);
}