function solveName(originalName){
    var newName;
    if(originalName.indexOf(' ') >= 0) newName = originalName.replace(' ', 'a');
    else newName = originalName;
    return newName;
}