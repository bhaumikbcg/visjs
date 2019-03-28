function goInNeighbourhood(a){
    var receivedNhName = a.nextSibling.innerHTML;
    nhNameData = JSON.parse(localStorage.getItem(receivedNhName));
    nhNameData.count += 1;
    localStorage.setItem(receivedNhName, JSON.stringify(nhNameData));
    nhNameData = JSON.parse(localStorage.getItem(receivedNhName));
    console.dir(nhNameData);
    if(nhNameData.count === 0){
        neighbourhoodName = "nh_level";
        neighbourhoodId = nhNameData.id;
        getHierarchy(neighbourhoodName, neighbourhoodId);
    }
}