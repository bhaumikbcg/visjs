var listOfNames = [], listLength;
function save(){ //Give a name to the network present on screen and save it in the browser memory.
    var privateSpace = prompt("Name:");//get the name from the user
    listOfNames.push(privateSpace);//push it into the array
    listLength = listOfNames.length;
    //Add html buttons in the dropdown which can be used to open the saved private space.
    $('#openPrivateSpace').append('<button class="dropdown-item btn" type="button" onclick="openPrivateSpace(this)">' + privateSpace + '</button>');
    //Add html buttons in the dropdown which can be used to submit the current space to the selected space.
    $('#submitPrivateSpace').append('<button class="dropdown-item btn" type="button" onclick="submitPrivateSpace(this)">' + privateSpace + '</button>');
    localStorage.setItem(privateSpace, JSON.stringify(tempArray));
}

function clearAll(){
    listOfNames.forEach(element => {
        localStorage.removeItem(element);
    });
    listOfNames = [];
}