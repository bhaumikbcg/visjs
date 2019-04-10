function submitForm(){  
    var frm = document.getElementsByName('upload-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    // functionConfirm("Do you like Football?", function yes() {   
    // }, function no() {
    //     alert("no")
    // });
    return false; // Prevent page refresh
}