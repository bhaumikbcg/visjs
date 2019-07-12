function goInNeighbourhood(a){//from displayNeighbourhood
    var receivedNhId = a.nextSibling.innerHTML;//collect name of the listItem from html
    nhNameData = JSON.parse(localStorage.getItem(receivedNhId));//get the object from the browser memory
    nhNameData.count += 1;//count how many times it is clicked
    localStorage.setItem(receivedNhId, JSON.stringify(nhNameData));//increment the count and again store it in the browser memory
    nhNameData = JSON.parse(localStorage.getItem(receivedNhId));//get that updated value
    console.dir(nhNameData);
    if(nhNameData.count === 0){//only get data to show under the neighbourhood for the first time
        hierarchyName = "nh_level";
        hierarchyId = nhNameData.id;
        getHierarchy(hierarchyName, hierarchyId);
    }
}