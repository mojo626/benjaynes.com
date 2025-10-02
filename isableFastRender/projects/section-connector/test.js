document.getElementById("image-div").hidden = true;

var image = true;
function toggle3D() {
    if (image) {
        document.getElementById("image-div").style.display = "none";
        document.getElementById("modelviewer-div").style.display = "block";
        image = false;
    } else {
        document.getElementById("image-div").style.display = "block";
        document.getElementById("modelviewer-div").style.display = "none";
        image = true;
    }
}