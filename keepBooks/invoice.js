var uploadPhoto = document.getElementById("upload");
var goodJob = document.getElementById("message");

uploadPhoto.onclick = function(event) {
    event.preventDefault();

    goodJob.innerHTML = "Photo Uploaded Successfully";
    goodJob.style.color = "rgb(0, 255, 0)";
    goodJob.style.fontWeight = "bolder";

    var sheetButton = document.createElement("button");
    sheetButton.innerHTML = "View Spreadsheet";
    sheetButton.style.marginTop = "0px";

    goodJob.appendChild(sheetButton);

    sheetButton.onclick = function() {
        location.assign("./spreadsheet.html");
    }
}