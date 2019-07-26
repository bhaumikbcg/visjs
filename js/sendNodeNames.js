function sendNodeNames(){
    copyNodes();
    var nameArrayForImageEditor = [];
    tempArray.forEach(element => {
        nameArrayForImageEditor.push(element.label);
    });
    localStorage.setItem("nameArray", JSON.stringify(nameArrayForImageEditor));
}