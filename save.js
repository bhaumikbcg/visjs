var listOfNames = [];
var listLength;
function save(){
    var privateSpace = prompt("Name:");
    listOfNames.push(privateSpace);
    listLength = listOfNames.length;
    $('.dropdown-menu').append('<button class="dropdown-item btn" type="button" onclick="openPrivateSpace(this)">' + privateSpace + '</button>');
    localStorage.setItem(privateSpace, JSON.stringify(tempArray));
}

function clearAll(){
    listOfNames.forEach(element => {
        localStorage.removeItem(element);
    });
    listOfNames = [];
}