function submitForm(){
    formString();
    var frm = document.getElementsByName('upload-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}