function containsObject(obj, list){
    list.forEach(element => {
        if(obj.from === element.from && obj.to === element.to) return true;
    });
    return false;
}