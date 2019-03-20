var listOfNames = [];
var listLength;
function save(){
    var privateSpace = prompt("Name:");
    listOfNames.push(privateSpace);
    listLength = listOfNames.length;
    $('#openPrivateSpace').append('<button class="dropdown-item btn" type="button" onclick="openPrivateSpace(this)">' + privateSpace + '</button>');
    $('#submitPrivateSpace').append('<button class="dropdown-item btn" type="button" onclick="submitPrivateSpace(this)">' + privateSpace + '</button>');
    localStorage.setItem(privateSpace, JSON.stringify(tempArray));
}

function clearAll(){
    listOfNames.forEach(element => {
        localStorage.removeItem(element);
    });
    listOfNames = [];
}