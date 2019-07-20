function solveName(originalName){
    var newName;
    newName = originalName.replace(/\s|&/g, "X");
    return newName;
}