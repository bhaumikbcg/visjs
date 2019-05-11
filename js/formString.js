var main_array = [];
function formString(response){
    var nh0 = [[],[],[]], nh1 = [[],[],[]], nh2 = [[],[],[]], nh3 = [[],[],[]], collab = [[],[]], wb = [[],[]], count = 0, responseLength = response.length;
    main_array = [];
    console.dir(response);
    if(responseLength >= 3) {
        wb = [["wb_id", response[responseLength-1][0][1]], ["wb_name", response[responseLength-1][1][1]]];
        collab = [["collab_id", response[responseLength-2][0][1]], ["collab_name", response[responseLength-2][1][1]]];
        nh0 = [["nh_level", 0], ["nh_id", response[0][1][1]], ["nh_name", response[0][2][1]]];
            if(responseLength >= 4){
                nh1 = [["nh_level", 1], ["nh_id", response[1][1][1]], ["nh_name", response[1][2][1]]];
                count += 1;
                if(responseLength >= 5){
                    nh2 = [["nh_level", 2], ["nh_id", response[2][1][1]], ["nh_name", response[2][2][1]]];
                    count += 1;
                    if(responseLength >= 6) {
                        nh3 = [["nh_level", 3], ["nh_id", response[3][1][1]], ["nh_name", response[3][2][1]]];
                        count += 1;
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