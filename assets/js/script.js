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

function loadText() {
    // get the current hour
    var currentHour = moment().hour();

    //starting at 7am, up till 19pm 
    for (let i = 7; i < 20; i++) {
        // get the text from local storage
        var text = localStorage.getItem(i);
        // set that id with the corresponding text
        $("#" + i).val(text);
        // if the current hour is less than i, it's in the future
        if (currentHour < i) {
            $("#" + i).addClass("future");
        }
        // if it's the same, it's the present 
        else if (currentHour === i) {
            $("#" + i).addClass("present");
        }
        // if it's more than i, it's in the past
        else if (currentHour > i) {
            $("#" + i).addClass("past");
        }
    }
};

function currentTime() {
    //get the full day, full month and data
    var currentDay = moment().format("dddd, MMMM Do");
    //set the header to say the day
    $("#currentDay").html(currentDay);
};

currentTime();
loadText();
setInterval(loadText,((1000*60)*15));