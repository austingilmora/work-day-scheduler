var saveButton = $(".save-btn");

// on save button click
saveButton.on("click", function() {
    //get the data-id from btn
    var id = $(this).attr("data-id");
    //find the corresponding text with that id
    var text = $("#" + id).val();
    //save that to local storage
    localStorage.setItem(id, text);
});
