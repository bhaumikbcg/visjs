function submitPrivateSpace(a){
    var storageFrom = privateSpaceStorage;
    var nameToMergeInto = a.innerHTML;
    var storageTo = JSON.parse(localStorage.getItem(nameToMergeInto));
    for(var i = 0; i < storageFrom.length; i++){
        if(storageTo.includes(storageFrom[i])) continue;
        else storageTo.push(storageFrom[i]);
    }
    localStorage.removeItem(nameToMergeInto);
    localStorage.setItem(nameToMergeInto, JSON.stringify(storageTo));
    alert("Submitted to " + nameToMergeInto);
}