// function containsObject(obj, list){
//     list.forEach(element => {
//         if(obj.from === element.from && obj.to === element.to) return true;
//     });
//     return false;
// }


function containsObject(obj, list){
    for(var i = 0; i < list.length; i++){
        if(obj.from === list[i].from && obj.to === list[i].to) return true;
    }
    return false;
}