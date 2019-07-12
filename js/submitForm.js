function submitForm(){
    var frm = document.getElementsByName('upload-form')[0];//collect the data to be submitted
    $('#passArray').val("value=" + JSON.stringify(main_array));
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}