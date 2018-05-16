
function popup(project) {
    
    document.getElementById("left-image").src = project.image;
    document.getElementById("modalLabel").textContent = project.itemtitle;
    document.getElementById("description").innerHTML = project.description;
}

function project(image, itemtitle, description) {

    this.image = image;
    this.itemtitle = itemtitle;
	this.description = description;
}